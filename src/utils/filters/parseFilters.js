import parseContactType from './parseContactType.js';
import parseIsFavourite from './parseIsFavourite.js';

const parseFilters = (query) => {
  let filter = {};

  if ('isFavourite' in query) {
    filter.isFavourite = parseIsFavourite(query.isFavourite);
  }

  if ('contactType' in query) {
    filter.contactType = parseContactType(query.contactType);
  }

  return filter;
};

export default parseFilters;
