module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': null,
    'selector-class-pattern': null,
    'selector-max-id': 1,
    'max-nesting-depth': 3,
  }
}