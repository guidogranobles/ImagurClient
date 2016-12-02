var React = require('react');
var Actions = require('../actions');
var ImageStore = require('../stores/image-store');
var Reflux = require('reflux');
var ReactRouter = require('react-router');

module.exports = React.createClass({

/*  mixins: [
     Reflux.listenTo(ImageStore, 'onChange')
  ],
  getInitialState: function(){
     return {
       images: []
     }
  },
  componentWillMount: function(){
      consolexx.log('topic componentWillMount');
      Actions.getIamges(this.props.params.id);
  },*/
  render: function(){
    console.log('topic to send');
       return <div>
          I'm a topic /*with ID {this.props.params.id}*/
        </div>
  }
/*  onChange: function(event, images){
    this.setState({
      images: images
    })
  }*/

})
