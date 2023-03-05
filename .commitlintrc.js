module.exports = {
  "lint-staged": {
    "src/**/*.{tsx,ts,js,jsx}": [
      "prettier --write",
      "eslint --fix",
      "git add"
    ],
    "src/**/*.less": [
      "stylelint --syntax less --fix",
      "git add"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
