var React = require('react');
var Header = require('./header');
var TopicList = require('./topic-lists');

module.exports = React.createClass({
    render: function(){
        return <div>
          <Header/>
          {this.content()}
        </div>
    },
    content: function(){
       if(this.props.childern){
          return this.props.children
       }else{
         return <TopicList />
       }
    }
});
