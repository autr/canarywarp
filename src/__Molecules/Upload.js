import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PropTypes from 'prop-types'; // ES6
import Form from './../__Molecules/Form';
import File from './../__Atoms/File';
import Icon from './../__Atoms/Icon';
import Button from './../__Atoms/Button';
import Spinner from './../__Atoms/Spinner';

import styles from "./../index.scss";

/**

WIP bundling File component into self-contained API component w. progress bar

*/

class Upload extends Form {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        file: null
      },
      isUploading: false,
      error: null,
      dialogType: null,
      dialogText: null
    }
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleUploadProgress = this.handleUploadProgress.bind(this);
  };

  componentDidMount () {

  };

  handleUploadProgress(event) {
    const percent = Math.round( (event.loaded * 100) / event.total );
    console.log(percent);
  }

  handleFileChange(event) {


    let formData = new FormData();
    formData.append('uploadFile', event.target.files[0]);
    const formKeys = Object.keys(this.props.formData);
    for (let i = 0; i < formKeys.length; i++ ) {
      const key = formKeys[i];
      formData.append(key, this.props.formData[key]);
    }

    this.post(this.props.path, formData, {
      onUploadProgess: this.handleUploadProgress
    }).then( (res) => {
      console.log('Upload Succeeded', res, res.data);

    }).catch( (err) => {

      console.log('Upload Failed', err);
    });

  };
  render() {

    let error = (this.state.error) ? <div className={styles.errorCopy}>{this.state.error}</div> : false;

    return (
      <div className={styles.wrapper}>
      
        <File
          title={'Verification Document ID'}
          inputType={'text'}
          icon={this.props.icon}
          disabled={this.state.disabled}
          name={'file'}
          error={this.hasError('file')}
          onChange={this.handleFileChange}
          content={this.state.form['file']}
          placeholder={'Upload document'} />

      </div>
    );
  };
};


Upload.defaultProps = {
  icon: '_actions/img-upload.svg',
  title: 'Upload Document',
  placeholder: 'Upload a document'
}

Upload.propTypes = {  
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  formData: PropTypes.object.isRequired,
  path: PropTypes.string.isRequired
};

export default Upload;
