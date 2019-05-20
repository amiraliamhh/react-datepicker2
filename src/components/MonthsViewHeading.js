import React, { Component } from 'react';
import PropTypes from "prop-types";
import { persianNumber } from '../utils/persian';
import { LeftArrow, RightArrow } from '../utils/assets';

export default class MonthsViewHeading extends Component {
  static propTypes = {
    year: PropTypes.object.isRequired,
    onNextYear: PropTypes.func.isRequired,
    onPrevYear: PropTypes.func.isRequired,
    isGregorian: PropTypes.bool
  };

  static contextTypes = {
    styles: PropTypes.object,
    type: PropTypes.number
  };

  render() {
    const { year, styles, isGregorian } = this.props;

    const yearFormat = isGregorian ? 'YYYY' : 'jYYYY';

    return (
      <div className={styles.heading} style={{ marginBottom: '0px', }} >
        <RightArrow onClick={this.props.onPrevYear} />

        <span className={styles.title} style={{ border: 'none', color: '' }} >
          { isGregorian ? year.format(yearFormat) : <span>{ persianNumber(year.format(yearFormat)) }</span> }
        </span>

        <LeftArrow onClick={this.props.onNextYear} />
      </div>
    );
  }
}
