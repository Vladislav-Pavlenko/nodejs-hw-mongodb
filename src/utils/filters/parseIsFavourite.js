import createHttpError from 'http-errors';

const parseIsFavourite = ({ isFavourite }) => {
  if (isFavourite === 'true') {
    return isFavourite;
  }
  throw createHttpError(400, 'Invalid input: value must be a boolean (true)');
};

export default parseIsFavourite;
