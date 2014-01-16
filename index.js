/**
 * Add space between English and CJK.
 */

module.exports = function(text) {
  // CJK English
  text = text.replace(/([\u4e00-\u9fa5\u3040-\u30FF])([a-z0-9@&=_\[\$\%\^\*\-\+\(\/\\])/ig, '$1 $2');
  // English CJK
  text = text.replace(/([a-z0-9!~&;=_\]\,\.\:\?\$\%\^\*\-\+\)\/\\])([\u4e00-\u9fa5\u3040-\u30FF])/ig, '$1 $2');
  // CJK quote
  text = text.replace(/([\u4e00-\u9fa5\u3040-\u30FF])(\"|\'(\S+))/ig, '$1 $2');
  // quote CJK
  text = text.replace(/((\S+)\'|\")([\u4e00-\u9fa5\u3040-\u30FF])/ig, '$1 $3');
  return text;
};
