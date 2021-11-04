import React, { Component } from "react";
import "./App.css"
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-datepicker";

import { add_reminder,clear_reminder ,remove_reminder } from "../src/Actions/Action";

class App extends Component {
  state = {
    text: "",
    date: Date.now(),
  }

  render_reminders = ()=>{

          const {reminders} = this.props;

          return(
            <ul className="list-group">

              {

                reminders.map((value , index)=>{

                  return(

                    <li key={index} className="list-group-item">

                      <div >{value.text}</div>
                      <div >{moment(new Date(value.date)).fromNow()}</div>
                      <div className="remove btn btn-danger" onClick={()=> this.props.remove_reminder(value.id)}>X</div>
                    </li>
                  )
                })
              }
              
            </ul>
          )
  }
  render() {
    console.log(this.props);
    return (
      <>
        <div className="container">
          <div className="row">
            <img src="" alt="Reminder Logo" />

            <div className="reminer-title">
              <h2> What Should You Do ? </h2>
            </div>

            <input
              onChange={(e) => this.setState({text:e.target.value})}
              type="text"
              value={this.state.text}
              className="form-control"
              placeholder="What Should You Do ?"
            />

            <input
              onChange={(e) => this.setState({date:e.target.value})}
              type="datetime-local"
              value={this.state.date}
              className="form-control"
              placeholder="What Should You Do ?"
              />
           
{/*              
            
                    <DatePicker
                        selected={this.state.date}
                        onChange={(date) =>this.setState({date:date})}
                        showTimeSelect
                        dateFormat="Pp"
                        timeCaption="time"
                        value={this.state.date}
                        className="form-control"
                      /> */}
            <button
              onClick={()=>
                {this.props.add_reminder(this.state.text , this.state.date)
                this.setState({
                  text:" " , 
                  date:" "
                })}
            }
              className="btn btn-primary btn-block"
            >
              Add Reminder
            </button>
            <div> {this.render_reminders()}</div>
            <button className="btn btn-danger btn-block" onClick={()=> this.props.clear_reminder()}>
              Clear Reminder
            </button>
          </div>
        </div>
      </>
    );
  }
}

// function mapDispatchToProps(dispatch){

//   return {

//     add_reminder:()=> dispatch(add_reminder())
//   }
// }

function mapStateToProps(state){

  return {

    reminders:state
  }

}
export default connect(mapStateToProps,{ add_reminder,remove_reminder, clear_reminder })(App);
