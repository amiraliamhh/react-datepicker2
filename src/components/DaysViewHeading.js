import React, { Component } from 'react';
import PropTypes from "prop-types";
import { persianNumber } from '../utils/persian';
import { LeftArrow, RightArrow } from '../utils/assets';
import MonthsViewHeading from './MonthsViewHeading'

export default class Heading extends Component {
  static propTypes = {
    month: PropTypes.object.isRequired,
    isGregorian: PropTypes.bool
  };

  static contextTypes = {
    styles: PropTypes.object,
    nextMonth: PropTypes.func.isRequired,
    prevMonth: PropTypes.func.isRequired,
    setCalendarMode: PropTypes.func.isRequired
  };

  state = {
    year: this.props.month,
  }

  handleMonthClick(event) {
    const { setCalendarMode } = this.context;
    event.preventDefault();
    setCalendarMode('monthSelector');
  }

  nextYear() {
    this.setState({
      year: this.state.year.clone().add(1, 'year')
    });
  }

  prevYear() {
    this.setState({
      year: this.state.year.clone().subtract(1, 'year')
    });
  }

  render() {
    const { nextMonth, prevMonth } = this.context;
    const { month, styles, isGregorian } = this.props;
    const { year } = this.state

    return (
      <div className={styles.heading} style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }} >
        <div style={{ display: "flex", width: "40%", justifyContent: "space-between", height: "100%", alignItems: "center" }} >
          <RightArrow onClick={prevMonth} />

          { isGregorian ? month.locale('en').format('MMMM YYYY') : <span>{ persianNumber(month.locale('fa').format('jMMMM')) }</span> }

          <LeftArrow onClick={nextMonth} />
        </div>
        <MonthsViewHeading
        isGregorian={ isGregorian }
        styles={styles}
        year={year}
        onNextYear={this.nextYear.bind(this) }
        onPrevYear={this.prevYear.bind(this) }
        />
      </div>
    );
  }
}
