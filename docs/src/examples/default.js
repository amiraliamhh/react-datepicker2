import React from 'react'
import moment from 'moment-jalaali'
// import DatePicker from '../../../src/components/DatePicker';
import DatePicker from '../../../dist/index'

class component extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: moment()};
  
  console.log(moment(0));
  }

  onChange(e) {

    console.log('e: ', moment(e).unix());
  }

  render() {
    return <DatePicker
      onChange={this.onChange}
      isGregorian={false}
      timePicker={false}
      value={this.state.value}
    />
  }
}

const title = 'Default';
const code = `class component extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {value: moment()};
  }
  render() {
    return <DatePicker
      value={this.state.value}
      onChange={value => this.setState({ value })}
    />
  }
}
`;
const Default = { component, title, code };

export default Default;