import moment from 'moment';

const DATE_FORMAT = 'D MMM';
const DATE_YEAR_FORMAT = 'D MMM YY';
const TIME_FORMAT = 'HH:mm';

export const getStandardDateTime = (date = new Date(), options = {}) => {
  const { part = 'datetime', amount = 0, format, unit = 'days' } = options;

  let result;

  if (amount > 0) {
    result = moment(date).add(amount, unit);
  } else if (amount < 0) {
    result = moment(date).subtract(-1 * amount, unit);
  } else {
    result = moment(date);
  }

  if (part === 'date') {
    return String(
      result.format(result.year() === new Date().getFullYear() ? DATE_FORMAT : DATE_YEAR_FORMAT)
    );
  }

  if (part === 'time') {
    return String(result.format(TIME_FORMAT));
  }

  return String(result.format(format || `${DATE_YEAR_FORMAT} ${TIME_FORMAT}`));
  // return String(
  //   result.format(
  //     `${
  //       result.year() === new Date().getFullYear() ? DATE_FORMAT : DATE_YEAR_FORMAT
  //     } ${TIME_FORMAT}`
  //   )
  // );
};

export const getElapsedTime = date => {
  const elapsedDuration = moment.duration(moment().diff(date));
  const seconds = elapsedDuration.asSeconds();

  if (seconds > 59) {
    const minutes = elapsedDuration.asMinutes();

    if (minutes > 59) {
      const hours = elapsedDuration.asHours();

      if (hours > 23) {
        const days = elapsedDuration.asDays();

        if (days > 30) {
          const months = elapsedDuration.asMonths();

          if (months > 11) {
            const years = elapsedDuration.asYears();

            return `${Math.round(years)} y ago`;
          }

          return `${Math.round(months)} mo ago`;
        }

        return `${Math.round(days)} d ago`;
      }

      return `${Math.round(hours)} h ago`;
    }

    return `${Math.round(minutes)} m ago`;
  }

  return `${Math.round(seconds)} s ago`;
};
