import createHttpError from 'http-errors';
const parseIsFavourite = (isFavourite) => {
  const validValues = ['true', 'false'];

  if (validValues.includes(isFavourite)) {
    return isFavourite;
  }

  throw createHttpError(
    400,
    'Invalid input: value must be one of "true" or "false"',
  );
};

export default parseIsFavourite;
