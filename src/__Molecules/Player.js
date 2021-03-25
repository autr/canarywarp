import React, { Component } from "react";
import styles from "./../_canarywarp/CanaryWarp.module.scss";
import classNames from 'classnames';
import Vimeo from 'react-vimeo'

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      playPause: true,
      autoplay: true
    }; 
    this.Vimeo = React.createRef();

    this.handleVimeoReady = this.handleVimeoReady.bind(this);
    this.handleVimeoPlay = this.handleVimeoPlay.bind(this);
    this.handleVimeoStart = this.handleVimeoStart.bind(this);
    this.handleVimeoBuffer = this.handleVimeoBuffer.bind(this);
    this.handleVimeoError = this.handleVimeoError.bind(this);
    this.handleVimeoProgress = this.handleVimeoProgress.bind(this);
    this.handlePausePlay = this.handlePausePlay.bind(this);


  }

  componentDidMount() {

    console.log('mounted', this.Vimeo);
  }
  handlePausePlay(e) {
    this.setState({playPause : !this.state.playPause});
    // ;
  }
  getClassNames() {
    return classNames(
        styles.player, {
        ['hidden']: !this.state.isPlaying,
        ['visible']: this.state.isPlaying
    });
  }


  handleVimeoReady() {
    console.log('ready', this.Vimeo);
    this.props.playingCallback();
  }

  handleVimeoProgress() {
    if (!this.state.isPlaying) {

      // console.log('progress');
      this.setState({isPlaying: true});
    }
  }

  handleVimeoPlay() {
    
    // console.log('play');
    this.setState({isPlaying: true});
    this.props.playingCallback();
  }
  handleVimeoStart() {
    
    // console.log('start');
    this.setState({isPlaying: true});
    this.props.playingCallback();
  }
  handleVimeoBuffer() {
    
    // console.log('buffer');
    this.setState({isPlaying: false});
  }
  handleVimeoError() {
    
    // console.log('error');
    this.setState({isPlaying: false});
  }

  render() {
    return (
          <Vimeo 
            ref={this.Vimeo}
            url={this.props.url}
            videoId={this.props.videoId}
            autoplay={this.props.autoplay} 
            playerOptions={this.props.playerOptions}
            playButton={this.props.playButton}
            className={this.getClassNames()}
            onProgress={this.handleVimeoProgress}
            playing={this.props.playPause}
            volume={0}
            muted={true}
            onReady={this.handleVimeoReady}
            onStart={this.handleVimeoStart}
            onPlay={this.handleVimeoPlay}
            onBuffer={this.handleVimeoBuffer}
            onError={this.handleVimeoError}
            width={'100%'}
            height={'100%'}
            style={styles.player}

            />
    );
  }
}

export default Player;
