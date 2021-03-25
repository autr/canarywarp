import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import styles from './../index.scss';
import Player from 'web-audio-player'
import classNames from 'classnames';
import Button from './../__Atoms/Button';
import Link from './../__Atoms/Link';
import Audio from './../__Atoms/Audio';


class Playlist extends Component {
  constructor(props) {
    super(props);

    this.state = {

      currentlyPlaying: null
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleEnded = this.handleEnded.bind(this);
    
    this.props.playlist.forEach( (track, i) => {
      track.path = this.props.rootPath + track.path;
      console.log('Adding audio', track.path);
    });
  }

  handleEnded(path) {
    let index;
    this.props.playlist.forEach( (track, i) => {
      console.log(track, path);
      if (track.path == path) index = i;
    });
    console.log('index', path, index);
    index = (index >= this.props.playlist.length - 1) ? 0 : index + 1;
    this.setState({currentlyPlaying: this.props.playlist[index].path});
  }
  handlePlay(path) {
    this.setState({currentlyPlaying: path});
    this.props.onPlay(path);
  }
  handlePause(path) {
    if (path == this.state.currentlyPlaying) this.setState({currentlyPlaying: null});
  }

  getButtonClassNames() {
    return classNames(styles.audioButton, {
        [styles.loading]: this.state.status == 0,
        [styles.paused]: this.state.status == 1,
        [styles.playing]: this.state.status == 2
    });
  }
  render() {

    let playlistLoop = [];
    for (let i = 0; i < this.props.playlist.length; i++) {
      const track = this.props.playlist[i];
      playlistLoop.push( 
      <div 
        className={styles.playlistLink}
        key={i}>
        {/*<span className={styles.trackId}>FTSE100</span>*/}
        <Audio 
          trackTitle={track.title}
          path={track.path}
          onPlay={this.handlePlay}
          onPause={this.handlePause}
          onEnded={this.handleEnded}
          state={ (this.state.currentlyPlaying == track.path) ? 2 : 1}
        >
        <Link 
          onClick={ (e) => {e.preventDefault() }}
          href={track.path}
          >{track.title}</Link>
        </Audio>
      </div>);
    }

    return (
      <div className={styles.playlist}>
        {/*<button onClick={ () => { this.handleEnded(this.state.currentlyPlaying)  }}>Skip</button>*/}
        {playlistLoop}
      </div>
    )
  }
};


Playlist.propTypes = {  
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  playlist: PropTypes.array.isRequired,
  rootPath: PropTypes.string
};
export default Playlist;  
