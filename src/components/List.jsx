var React = require('react');
var ListItem = require('./ListItem.jsx');

var todos = [{"id": 1,"text": "You're shining like the brightest star."},{"id": 2,"text": "Ballerina, you're doing alright."},{"id": 3,"text": "So, hold on to each other."}];

var List = React.createClass({
  render: function () {
    var toDo = todos.map(function(item) {
      return <ListItem key={item.id} todo={item.text} />
    });
    return (
      <ol>{toDo}</ol>
    );
  }
});

module.exports = List;
