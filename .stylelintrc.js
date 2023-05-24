module.exports = {
  defaultSeverity: 'error',
  extends: ['@blueking/stylelint-config-bk'],
  "rules": {
    'declaration-no-important': [true, {'severity': 'warning'}],
    'no-descending-specificity': [true, {'severity': 'warning'}],
    'color-hex-case': null,
    'color-function-notation': null,
    'alpha-value-notation': null,
    // 'no-descending-specificity': null,
    'selector-max-id': 2,
    'no-empty-source': null,
  }
};
