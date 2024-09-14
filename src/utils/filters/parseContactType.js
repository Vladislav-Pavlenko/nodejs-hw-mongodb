import createHttpError from 'http-errors';

const parseContactType = ({ contactType }) => {
  const validValues = ['home', 'personal', 'work'];

  if (typeof contactType === 'string' && validValues.includes(contactType)) {
    return contactType;
  }

  throw createHttpError(
    400,
    'Invalid input: value must be one of "home", "personal", or "work"',
  );
};

export default parseContactType;
