module.exports = {
    env: {
        browser: true,
        node: true
    },
    extends: [
        "plugin:prettier/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:angular/johnpapa"
    ],
    rules: {
        "angular/service-name": 0
    },
    globals: {},
    parser: "@typescript-eslint/parser",
    parserOptions: {
        project: "tsconfig.json",
        sourceType: "module"
    },
    plugins: ["@typescript-eslint", "@typescript-eslint/tslint"],
    settings: {}
};