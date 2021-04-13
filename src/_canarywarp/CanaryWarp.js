import React, { Component } from "react";
import Audio from "./../__Atoms/Audio";
import Form from "./../__Molecules/Form";
import styles from "./CanaryWarp.module.scss";
import Playlist from "./../__Molecules/Playlist";
import Player from "./../__Molecules/Player"
import classNames from 'classnames';
import Link from "./../__Atoms/Link";
import Vimeo from 'react-vimeo'
import Data from './Data'

class CanaryWarp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      playPause: true,
      autoplay: true,
      overlayImage: ''
    }; 

    this.Player = React.createRef();

    this.handlePlaylistPlay = this.handlePlaylistPlay.bind(this);


    this.handleVimeoReady = this.handleVimeoReady.bind(this);
    this.handleVimeoPlay = this.handleVimeoPlay.bind(this);
    this.handleVimeoStart = this.handleVimeoStart.bind(this);
    this.handleVimeoBuffer = this.handleVimeoBuffer.bind(this);
    this.handleVimeoError = this.handleVimeoError.bind(this);
    this.handleVimeoProgress = this.handleVimeoProgress.bind(this);
    this.setDimensions = this.setDimensions.bind(this);
    this.handlePausePlay = this.handlePausePlay.bind(this);

    this.setOverlay = this.setOverlay.bind(this);


  }

  handlePlaylistPlay() {
    const e = {preventDefault: () => { console.log('preventDefault') } };
    console.log('clicked!', this.Player.current.Vimeo.current.playVideo( e));
  }

  setOverlay(e) {
    e.preventDefault();
    const target = (e.target.href) ? e.target : (e.target.parentNode.href) ? e.target.parentNode : e.target.parentNode.parentNode;
    const href = (this.state.overlayImage === target.href) ? '' : target.href;
    this.setState({overlayImage: href});
  }

  componentDidMount() {
    
    document.title = "CANARYWARP ® - Upitup Records";

    this.setDimensions();
    window.addEventListener('resize', this.setDimensions);
  }
  handlePausePlay(e) {
    this.setState({playPause : !this.state.playPause});
    // ;
  }
  getClassNames() {
    return classNames(
        styles.player, {
        [styles.hidden]: !this.state.isPlaying,
        [styles.visible]: this.state.isPlaying
    });
  }

  setDimensions() {

    const ifr = document.querySelectorAll('iframe')[0];
    const bg = document.getElementById('background');
    const fore = document.getElementById('foreground');

    const width = (1350/1080)*window.innerHeight;

    if (!ifr) return;
    ifr.style.width = `${width}px`;
    bg.style.width = `${width}px`;

    /* work out left offset */

    const offset = fore.offsetWidth - 240;
    fore.style.left = -offset;

    const totalWidth = width + offset;
    const excess = window.innerWidth - totalWidth;

    bg.style.left = `${(excess/2) + (offset)}px`;
    fore.style.left = (excess < 0) ? '0px' : `${excess/2}px`;


    // ifr.style.left = `${excess}px`;
  }

  handleVimeoReady() {
    // console.log('ready');
    this.setDimensions();
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
    this.setDimensions();
  }
  handleVimeoStart() {
    
    // console.log('start');
    this.setState({isPlaying: true});
    this.setDimensions();
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
      <div className={styles.warp}>
        <div className={styles.blackBackground} />
        {this.state.overlayImage &&

          <div 
            onClick={ () => { this.setState({overlayImage: ''})}}
            className={styles.overlay}>

            <img src={this.state.overlayImage} />

          </div>

        }
        <div className={styles.background} id={'background'}>


          <img className={styles.cover} src={process.env.PUBLIC_URL + '/media/bg.jpg'} />
          {<Player 
            ref={this.Player}
            url={'https://player.vimeo.com/video/300324471'}
            videoId={'300324471'}
            autoplay={this.state.autoplay} 
            playingCallback={this.setDimensions}
            playerOptions={{
              autoplay: this.state.autoplay,
              background: 1,
              loop: true
            }}
            />}

        </div>
        <div className={styles.foreground} id={'foreground'}>
          {<img 
              height={'90%'}
              style={{
                position: 'absolute',
                top: '5%',
                left: '-30px',
                display: 'none'
              }} 
              src={process.env.PUBLIC_URL + '/media/logo_vertical.svg'} 
            />}
          {<h1><em>CANARYWARP ®</em></h1>}
          <div className={styles.text}>
            <p>
              <a href={'https://upitup.com'} target={'_blank'}>
                {<img width={220} src={process.env.PUBLIC_URL + '/media/logo_white.svg'} />}
              </a>
            </p>
          </div>
          <div className={styles.text}>
            <Playlist 
              onPlay={this.handlePlaylistPlay}
              playlist={Data.playlist}
              rootPath={process.env.PUBLIC_URL}
               />
            <p>
              <span className={styles.plus}>+</span>
              <span className={styles.plus}>
                When Nothing Is Left 
                <span className={styles.iconText}>BONUS</span> 
              </span>
            </p>
            <p className={styles.playlistLink}>
              <span className={styles.plus}>+</span>
              <span className={styles.plus}>Ultrafayre <span className={styles.iconText}>BONUS</span> </span>
            </p>
          </div>

          
          <h4 style={{marginTop: 0}}>UPUSB01</h4>
          <div className={styles.text}>
            <p><em>{Data.record}</em></p>
            
          </div>
          <div className={styles.text} style={{paddingBottom: 0}}>
            
            <a 
              onClick={ (e) => this.setOverlay(e)}
              className={styles.eyeLink} 
              href={process.env.PUBLIC_URL + '/media/photo01.jpg'}>
              <span className={styles.prevImg}>
                <img src={process.env.PUBLIC_URL + '/media/photo01.jpg'} />
              </span>
              <span className={styles.eyeImg}>
              <img src={process.env.PUBLIC_URL + '/media/eye.svg'} /></span>
            </a>
            <a 
              onClick={ (e) => this.setOverlay(e)}
              className={styles.eyeLink} 
              href={process.env.PUBLIC_URL + '/media/photo02.jpg'}>
              <span className={styles.prevImg}>
                <img src={process.env.PUBLIC_URL + '/media/photo02.jpg'} />
              </span>
              <span className={styles.eyeImg}>
              <img src={process.env.PUBLIC_URL + '/media/eye.svg'} /></span>
            </a>
            <a 
              onClick={ (e) => this.setOverlay(e)}
              className={styles.eyeLink} 
              href={process.env.PUBLIC_URL + '/media/photo03.jpg'}>
              <span className={styles.prevImg}>
                <img src={process.env.PUBLIC_URL + '/media/photo03.jpg'} />
              </span>
              <span className={styles.eyeImg}>
                <img src={process.env.PUBLIC_URL + '/media/eye.svg'} />
              </span>
            </a>




            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="DGCAH4P86SM66" / >
              <input type="hidden" name="on0" value="Shipping" />
              <div className={styles.marginTop}>
                <div className={styles.selectDisabled} >
                  <select name="os0" disabled="disabled">
                    <option value="UK">£12 + UK Shipping (3.00)</option>
                    <option value="EU">£12 + EU Shipping (4.00)</option>
                    <option value="OVERSEAS">£12 + International Shipping (5.00)</option>
                  </select> 
                </div>
              </div>
                  {/*<img width={180} style={{marginLeft: '20px', display: 'block'}} src={process.env.PUBLIC_URL + '/media/logo_light.svg'} />*/}
              <div className={styles.submitWrapper}>
                <input type="hidden" name="currency_code" value="GBP" / >
                <input 
                  disabled="disabled"
                  className={styles.submit}  
                  type="submit" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" 
                  
                  name="submit" 
                  value={Data.buy} />
                <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1" />


              </div>

            </form>
          </div>


          
          <h4>UPFREE76</h4>
          <div className={styles.text}>
            <a 
                  href="https://www.upitup.com/releases/upfree76"
                  target="_blank"
                  className={styles.submit}
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/media/lines.png)`
                  }}>Download</a>
             <br />
            <a 
                  style={{marginTop: 10, width: '104px'}}
                  href="https://canarywarp.bandcamp.com"
                  target="_blank"
                  className={styles.submit}>Bandcamp</a>
            <a 
                  style={{marginTop: 10, width: '104px', marginLeft: 10}}
                  href="https://vimeo.com/536401268"
                  target="_blank"
                  className={styles.submit}>Video</a>
            
          </div>


         <div className={styles.supporters}>
            <a href={'https://upitup.com'} target={'_blank'} className={styles.text}>
              <img width={'11.5%'} src={process.env.PUBLIC_URL + '/media/svg01.svg'} />
              <img width={'15.3%'} src={process.env.PUBLIC_URL + '/media/svg02.svg'} />
              <img width={'20%'} src={process.env.PUBLIC_URL + '/media/svg03.svg'} />
              <img width={'25%'} src={process.env.PUBLIC_URL + '/media/svg04.svg'} />
              <img width={'16%'} src={process.env.PUBLIC_URL + '/media/svg05.svg'} />
              <img width={'15%'} src={process.env.PUBLIC_URL + '/media/svg06.svg'} />
              <img width={'30%'} src={process.env.PUBLIC_URL + '/media/svg07.svg'} />
              <img width={'10%'} src={process.env.PUBLIC_URL + '/media/svg08.svg'} />
            </a>
          </div>


        </div>

      </div>
    );
  }
}

export default CanaryWarp;
