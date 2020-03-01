module.exports = {
  "env": {
    "es6": true
  },
  "settings": {
    "react": {
      "version": "latest"
    }
  },
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
    "eslint-config-prettier"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "semi": [2, "never"],
    "import/no-unresolved": "off",
    "no-undef": "off",
    "react/prop-types": "off",
    "no-console": "error",
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 100,
        "semi": false
      }
    ]
  },
  "plugins": ["prettier"]
};