import { SORT_ORDER } from '../constants/index.js';

const parseSortParams = ({ sortBy, allowedSortByFields, sortOrder }) => {
  const parsedSortBy = allowedSortByFields.includes(sortBy) ? sortBy : '_id';
  const parsedSortOrder = SORT_ORDER.includes(sortOrder)
    ? sortOrder
    : SORT_ORDER[0];

  return {
    sortBy: parsedSortBy,
    sortOrder: parsedSortOrder,
  };
};

export default parseSortParams;
