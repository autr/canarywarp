import React, {Component} from 'react';

import PropTypes from 'prop-types'; // ES6
import classNames from 'classnames';
import styles from "./../index.scss";

const iconsRepo = 'https://github.com/rocketlawyer/rl-icons/raw/master/';

class Icon extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false
    };

    this.setDimensions = this.setDimensions.bind(this);
  }

  isImage() {
    const str = this.props.data.toLowerCase();
    let isImage = false;
    ['.svg', '.png', '.jpg', '.jpeg'].forEach( (ext) => {
      if (str.indexOf(ext) != -1) isImage = true;
    });
    return isImage;
  }
  getClassNames() {



    return classNames('icon', {
        [styles.hidden] : !this.state.isLoaded && this.isImage() // icons hidden until rescaled
    });
  }

  setDimensions({target:img}) {
    const ww =  img.offsetWidth;
    const hh = img.offsetHeight;
    if (ww > hh) {
      img.width = this.props.size | 22; 
    } else {
      img.height = this.props.size | 22;
    }
    this.setState({isLoaded: true});
  }
  render() {

    let icon;

    if (this.isImage()) {
      icon = <img alt="Icon" onLoad={this.setDimensions} className={this.getClassNames()} src={iconsRepo + this.props.data + '?sanitize=true'} />;

    } else {
      icon = <span onLoad={this.setDimensions} className={this.getClassNames()}>{this.props.data}</span>;
    }

    return (
      <div 
        className={styles.iconWrapper }
        style={this.props.style}
        >{icon}</div>
    )
  } 
};

Icon.propTypes = {  
  data: PropTypes.string.isRequired,
  size: PropTypes.number
};


export default Icon;  