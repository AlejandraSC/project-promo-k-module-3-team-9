import React from 'react';
import './Share.scss';

class Share extends React.Component {
  render() {
    return (
      <fieldset className="fieldset section__share js-section__share">
        <div className="section__share--collapsable uppercase">
          <h3 className="section__share--title bold">
            <i className="fa fa-share-alt form--icons" aria-hidden="true"></i>
            Comparte
          </h3>
          <a className="button--collapsable js-shareCollapsable">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </a>
        </div>
        <section className="section__link js-shareContainer hidden">
          <article className="section__link--share js-section__link--share hidden--border">
            <button
              type="button"
              className="button--create js-button--create uppercase"
            >
              <i className="fa fa-id-card" aria-hidden="true"></i>Crear tarjeta
            </button>
          </article>
          <article className="section__link--twitter js-twitterContainer hidden">
            <h3 className="section__share--subtitle">
              La tarjeta ha sido creada
            </h3>
            <a className="link link--share" href="" target="_blank"></a>
            <a href="" className="button--share" target="_blank">
              <i className="fa fa-twitter" aria-hidden="true"></i>Compartir en
              twitter
            </a>
          </article>
        </section>
      </fieldset>
    );
  }
}

export default Share;