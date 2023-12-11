module.exports = {
    "extends": 'stylelint-config-recommended-scss',
    "plugins": [
        'stylelint-selector-bem-pattern'
    ],
    "rules": {
        'plugin/selector-bem-pattern': {
            "preset": 'bem',
            "componentSelectors": "bemSelector"
        }
    }
}