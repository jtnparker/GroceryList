import React from "react";
import axios from "axios";
import ListEntry from './ListEntry.jsx';
class List extends React.Component {
  constructor(props) {
  super(props);
  this.state =  {
    item: "",
    quantity: 1,
    entry: {},
    groceryList: []
  };

  this.getList = this.getList.bind(this);
  this.postList = this.postList.bind(this);
  this.deleteList = this.deleteList.bind(this);
  this.handleChangeName = this.handleChangeName.bind(this);
  this.handleChangeCount = this.handleChangeCount.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  };
  componentDidMount() {
    this.getList();
  }
getList() {
  axios
  .get('/api')
  .then((list) => {
    this.setState({
      groceryList: list.data
    })
  })
  .catch((err) => {
    console.error(err);
  })
};

postList(item, quantity) {
  axios
  .post('/api', {item: item, quantity: quantity}) // so todo:todo  //gets from req.body. axios will get it. => ({item:item}, {quantity:quantity})
  .then(() => {
    this.getList();
})
  .catch((err) => {

  console.error(err);
  });

};

deleteList(id) {
  console.log(id);
  axios
  .delete(`/api/${id}`)
  .then(() => {
    this.getList();
  })
  .catch((err) => console.error(err));
};

handleChangeName(event) {
  this.setState({
    item: event.target.value,
  });
};
handleChangeCount(event) {
  this.setState({
    quantity: event.target.value,
  });
};

handleSubmit(event) {
  event.preventDefault();
  this.postList(this.state.item, this.state.quantity);
  event.target.reset();
};

render() {
  return (
    <div>
      <h1>Grocery List</h1>
      <form onSubmit={event => this.handleSubmit(event)}>
        <h4>New Grocery Item:</h4>
        <label>Grocery Item Name</label>
        <input type  = "text" onChange={this.handleChangeName} />
        <label>Grocery Item Count</label>
        <input type  = "number" onChange={this.handleChangeCount} />
        <button>Submit</button>
      </form>
      <h4>Current Grocery List</h4>
      <ul>
        {this.state.groceryList.map((item) => (
          <ListEntry
            item = {item}
            deleteList={this.deleteList}
          />
        ))}
      </ul>
    </div>
  );
}
}

export default List;

