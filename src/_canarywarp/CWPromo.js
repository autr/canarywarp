import React, { Component } from "react";
import Audio from "./../__Atoms/Audio";
import Form from "./../__Molecules/Form";
import styles from "./CanaryWarp.module.scss";
import Playlist from "./../__Molecules/Playlist";
import Player from "./../__Molecules/Player"
import classNames from 'classnames';
import Link from "./../__Atoms/Link";
import Data from './Data'

class CWPromo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAllowed: false,
      inputValue: ''
    }; 

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  onSubmit(e) {
    e.preventDefault();
    if (this.state.inputValue === 'ftse100') {
      this.setState({isAllowed: true});
    }
  }

  onChange(e) {
    this.setState({inputValue: e.target.value});    
  }

  componentDidMount() {
    document.title = "CANARYWARP ® - Upitup Records";

  }

  render() {
    return (
      <div className={styles.promo}>
        <div className={styles.wrapper}>
          <h1><em>{Data.title}</em></h1>
          <div className={styles.text}>
            <p>
              <a href={'https://upitup.com'} target={'_blank'}>
                {<img width={220} src={process.env.PUBLIC_URL + 'media/logo_white.svg'} />}
              </a>
            </p>
          </div>


          { !this.state.isAllowed ? (

          <form onSubmit={this.onSubmit} className={styles.text}>
            <input type={'text'} placeholder={'Password'} value={this.inputValue} onChange={this.onChange} />
            <input 
              style={{ backgroundImage: `url(${process.env.PUBLIC_URL}media/lines.png)` }} 
              className={styles.submit} 
              type={'submit'} />
          </form>

          ) : (
            <div>
              <iframe src="https://player.vimeo.com/video/304363069?title=0&byline=0&portrait=0" width="420" height="336" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>


              <div className={styles.links}>
                <h4><em>Download</em></h4>
                <p className={styles.downloads}>
                  <a 
                    href={'http://upitup.com/canarywarp/CANARYWARP%C2%AE%20AIFF.zip'} 
                    target={'_blank'}>AIFF</a>
                  {' / '}
                  <a 
                    href={'http://upitup.com/canarywarp/CANARYWARP%C2%AE%20MP3.zip'} 
                    target={'_blank'}>MP3</a>
                  {' / '}
                  <a 
                    href={'http://upitup.com/canarywarp/CANARYWARP%201080p.mp4'}
                    target={'_blank'}>Video</a>
                  {' / '}
                  <a 
                    href={'http://upitup.com/canarywarp/CANARYWARP%C2%AE%20Images.zip'} 
                    target={'_blank'}>Images</a>
                </p>
                <p style={{width: '240px', margin: '0 auto' }} ><em>{Data.record}</em></p>
                
                <p>
                  <a 
                    className={styles.submit}
                    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}media/lines.png)` }} 
                    href={'http://upitup.com/canarywarp'} 
                    target={'_blank'}>CW Website</a>
                </p>
              </div>

            </div>
          
          )}



        </div>

      </div>
    );
  }
}

export default CWPromo;
