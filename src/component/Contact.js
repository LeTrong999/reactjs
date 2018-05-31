import React, { Component } from 'react';
import img25 from './../images/25.jpg';

class Contact extends Component {
  render() {
    return (
      <div className="row">
        <h1 style={{textAlign: 'center'}}>Contact</h1>
        <div className="col-md-4 col-xs-12 col-sm-6 margt">
          <div className="big">
            <figure className="effect-zoe">
              <img src={img25} alt="img25" />
              <figcaption>
                <p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
              </figcaption>
              <div className="childbig">
                <button className="btn btn-primary">Button</button>
              </div>      
            </figure>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-6 margt">
          <div className="big">
            <figure className="effect-zoe">
              <img src={img25} alt="img25" />
              <figcaption>
                <p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
              </figcaption>
              <div className="childbig">
                <button className="btn btn-primary">Button</button>
              </div>      
            </figure>
          </div>
        </div>
        <div className="col-md-4 col-xs-12 col-sm-6 margt">
          <div className="big">
            <figure className="effect-zoe">
              <img src={img25} alt="img25" />
              <figcaption>
                <p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p>
              </figcaption>
              <div className="childbig">
                <button className="btn btn-primary">Button</button>
              </div>      
            </figure>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
