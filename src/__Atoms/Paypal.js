import React, {Component} from 'react';
import styles from "./../index.scss";

class Paypal extends Component {
  render() {
    return (
      <div className={styles['form-group']}>

        <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="95C9SF59MMU7Y">
        <table>
        <tr><td><input type="hidden" name="on0" value="Shipping">Shipping</td></tr><tr><td><select name="os0">
          <option value="UK Shipping">UK Shipping £10.00 GBP</option>
          <option value="EU Shipping">EU Shipping £12.00 GBP</option>
          <option value="International Shipping">International Shipping £15.00 GBP</option>
        </select> </td></tr>
        </table>
        <input type="hidden" name="currency_code" value="GBP">
        <input type="image" src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal – The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_GB/i/scr/pixel.gif" width="1" height="1">
        </form>

    </div>
    )
  }
};


export default Paypal;  
