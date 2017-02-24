const camelCasePattern = /([a-z])([A-Z])/g;
const snakeCasePattern = /_+/g;
const spaceOrSnakeCasePattern = /(_+)|(\s+)/g;

/**
 * Capitalizes the first letter in a string, and (by default) lowercases the rest of the string
 *
 * @param  {String}  string                  [string to capitalize]
 * @param  {Boolean} [lowerRemaining=true]   [whether or not to make the rest of the string lowercase]
 * @return {String}                          [capitalized string]
 */
export function capitalize(string, lowerRemaining = true) {
  if (!string || string.length === 0) {
    return '';
  }
  let remaining = string.slice(1) || '';
  if (lowerRemaining) {
    remaining = remaining.toLowerCase();
  }
  return string.charAt(0).toUpperCase() + remaining;
}

/**
 * Transforms a string into a more human friendly format.
 * For example, 'friendly_name' and 'friendlyName' would become 'Friendly name'
 *
 * @param  {String} string [String to transform]
 * @param  {Boolean} shouldCapitalize=true [Whether or not to capitalize the string]
 * @return {String}        [Human friendly form of the string]
 */
export function humanize(string, shouldCapitalize = true) {
  const readableString = string.replace(camelCasePattern, '$1 $2').replace(snakeCasePattern, ' ');
  if (shouldCapitalize) {
    return capitalize(readableString);
  }
  return readableString;
}

/**
 * Transforms normal text to kebab-case
 * @param  {String} string [String to transform]
 * @return {String}        [kebab-case-string]
 */
export function dasherize(string) {
  return (string || '').replace(camelCasePattern, '$1 $2').replace(spaceOrSnakeCasePattern, '-');
}

export function formatDollars(amount) {
  const amountWithCents = Number(amount).toFixed(2);
  const amountWithCommas = amountWithCents.replace(/\B(?=(\d{3})+\.)/g, ",");
  return ("$" + amountWithCommas);
}

export function formatPhone(phone) {
  return phone ? phone.replace(/\D/g, '').replace(/(\d)?(\d{3})(\d{3})(\d{4})/, '$1($2) $3-$4') : '';
}

/**
 * Transforms string into a lowercased, dash-delimited string
 *
 * e.g. "Class Act" => "class-act"
 * @param  {String} string [input string]
 * @return {String}        [lowercased string with dashes as word delimiters]
 */
export function toClassName(string) {
  const limitPunctuationPattern = /[^\w\-]/g; // should allow word characters and -
  return dasherize(string).replace(limitPunctuationPattern, '').toLowerCase();
}
