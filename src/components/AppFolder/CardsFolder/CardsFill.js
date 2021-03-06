import React from 'react';
import GetAvatar from '../../MainFolder/GetAvatar';
import './CardsFill.scss';

class CardsFill extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      isOpen: false
    };
  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleInputChange(ev) {
    const inputValue = ev.target.value;
    const inputValueId = ev.target.id;
    this.props.handleChange(inputValue, inputValueId);
  }
  render() {
    const openClassName = this.state.isOpen ? '' : 'hidden';
    const rotateArrow = this.state.isOpen ? 'rotate' : '';
    return (
      <fieldset className="fieldset form--fill">
        <div className="section__fill--collapsable uppercase">
          <h3 className="section__fill--title" bold>
            <i className="fa fa-keyboard-o form--icons" aria-hidden="true"></i>
            Rellena
          </h3>
          <a className={`button--collapsable ${rotateArrow}`}>
            <i
              className="fa fa-chevron-down"
              aria-hidden="true"
              onClick={this.handleClick}
            ></i>
          </a>
        </div>
        <div className={` aria-hidden ${openClassName}`}>
          <div>
            <label className="element-form" htmlFor="name">
              Nombre completo
              <input
                className="element-form form-input"
                id="name"
                type="text"
                placeholder="Ej: Lisa Simpson"
                name="name"
                onChange={this.handleInputChange}
                value={this.props.data.name}
              />
            </label>
          </div>
          <div>
            <label className="element-form" htmlFor="position">
              Puesto
              <input
                className="element-form form-input"
                id="job"
                type="text"
                placeholder="Ej: Saxophonist "
                name="job"
                onChange={this.handleInputChange}
                value={this.props.data.job}
              />
            </label>
          </div>

          {/* <div>
            <label className="element-form" htmlFor="image">
              Imagen de perfil
              <input
                className="element-form form-input form-file"
                id="photo"
                type="file"
                name="photo"
                onChange={this.handleInputChange}
                value={this.props.data.profileImage}
              />
            </label>
            <div className="button--wrapper">
              <button type="button" className="button--file">
                Añadir imagen
              </button>
              <div className=" image--profile-preview"></div>
            </div> */}
          <GetAvatar
            updateAvatar={
              this.props.handleChange
            } /* "Funcin de Lifting que viene de App" */
            isAvatarDefault=""
            avatar={
              this.props.data.profileImage
            } /* "El valor de del avatar que App guarda en el state" */
          ></GetAvatar>

          <div>
            <label className="element-form" htmlFor="email">
              Email
              <input
                className="element-form form-input"
                id="email"
                type="email"
                placeholder="Ej: lisa-simpson@gmail.com"
                name="email"
                onChange={this.handleInputChange}
                value={this.props.data.email}
              />
            </label>
          </div>
          <div>
            <label className="element-form" htmlFor="phone">
              Teléfono
              <input
                className="element-form form-input"
                id="phone"
                type="tel"
                placeholder="Ej: 555-55-55-55"
                name="phone"
                onChange={this.handleInputChange}
                value={this.props.data.phone}
              />
            </label>
          </div>
          <div>
            <label className="element-form" htmlFor="linkedin">
              Linkedin
              <input
                className="element-form form-input"
                id="linkedin"
                type="text"
                placeholder="Ej: lisa.simpson"
                name="linkedin"
                onChange={this.handleInputChange}
                value={this.props.data.linkedin}
              />
            </label>
          </div>
          <div>
            <label className="element-form" htmlFor="github">
              Github
              <input
                className="element-form form-input"
                id="github"
                type="text"
                placeholder="Ej: lisa-simpson"
                href="https://"
                name="github"
                onChange={this.handleInputChange}
                value={this.props.data.github}
              />
            </label>
          </div>
        </div>
      </fieldset>
    );
  }
}

export default CardsFill;
