var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <img className={'contactImage'} src={'http://cdn.onlinewebfonts.com/svg/img_405324.png' alt={'ikonka osoby'}}>
        <p className={'contactLabel'}>
          Imię: {this.props.item.firstName}
        </p>
        <p className={'contactLabel'}>
          Nazwisko: {this.props.item.lastName}
        </p>
        <a href={'mailto:' + this.props.item.email}>
          {this.props.item.email}
        </a>
      </div>
    )
  },
});
