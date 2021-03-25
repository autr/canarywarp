import React, {Component} from 'react';
import PropTypes from 'prop-types'; // ES6
import styles from './../index.scss';
import classNames from 'classnames';
import Button from './../__Atoms/Button';

class Audio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0 // 0=Spinner || 1=Arrow || 2=LineLine
    };

    this.isSet = false;

    this.audio = document.createElement('audio');
    this.audio.src = this.props.path;
    this.audio.autoPlay = this.props.autoPlay;


    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.toggle = this.toggle.bind(this);
    this.onError = this.onError.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onDecoding = this.onDecoding.bind(this);

    this.audio.addEventListener('playing', (e) => {
      console.log('pppplaying');

      window.audio = this.audio;
    });
    this.audio.addEventListener('waiting', (e) => {
      console.log('wwwaiting');
    });
    this.audio.addEventListener('ended', (e) => {
      console.log('eeeend');
      this.props.onEnded(this.props.path);
    });
    this.audio.addEventListener('canplay', (e) => {
      // console.log('ccccanplay'); 
    });
    this.audio.addEventListener('canplaythrough', (e) => {
      // if (!this.isSet) {
      //   console.log('ccccanplaythrough');
      //   const newTime = this.audio.duration - 10;
      //   console.log(newTime, this.audio.duration);
      //   this.audio.currentTime = newTime;
      //   this.isSet = true;
      // }
    });

  }

  play() {
    console.log('Play', this.props.trackTitle, this.audio.duration - 4);

    const isPlayed = this.audio.play();
    isPlayed.then( (success) => {
      console.log('success played', success);
    }).catch( (err) => {

      console.log('error played', err);
    });
    this.setState({status: 2});
    this.props.onPlay(this.props.path);


  }
  pause() {
    console.log('Pause', this.props.trackTitle);
    this.audio.pause();
    this.setState({status: 1});
    this.props.onPause(this.props.path);
  }
  toggle() {
    (!this.audio.paused) ? this.pause() : this.play();
  }







  onError(err) {
    console.log('onError', err);
    this.setState({status: 1});
  }
  onEnd() {
    console.log('onEnd');
    this.setState({status: 1});
    // if (this.props.autoPlay) this.audio.play();
  }
  onProgress() {
    console.log('onProgress');
    this.setState({status: 2});
    // if (this.props.autoPlay) this.audio.play();
  }
  onDecoding() {
    console.log('onDecoding');
    this.setState({status: 0});
    // if (this.props.autoPlay) this.audio.play();
  }

  componentDidMount() {
    
    if ((this.props.state == 1)&&(this.state.status != 1)) this.pause();
    if ((this.props.state == 2)&&(this.state.status != 2)) this.play();
  }

  componentDidUpdate(prevProps) {
    if ((this.props.state == 1)&&(this.state.status != 1)) this.pause();
    if ((this.props.state == 2)&&(this.state.status != 2)) this.play();
  }

  getButtonClassNames(root) {
    return classNames(root, {
        ['loading']: this.state.status == 0,
        ['paused']: this.state.status == 1,
        ['playing']: this.state.status == 2
    });
  }


  render() {



    return (
      <div 
        className={this.getButtonClassNames('audioGroup')}
        onClick={this.toggle}>
        <div className={'audio'}>
          <div 
            className={this.getButtonClassNames('audioButton')}
          />
          {this.props.children}
        </div>
      </div>
    )
  }
};


Audio.propTypes = {  
  autoPlay: PropTypes.bool,
  trackTitle: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  state: PropTypes.number
};
export default Audio;  
