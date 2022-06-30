const common = `
    --require setup/assertions.js
    --require setup/hooks.js
    --require step-definitions/**/*.step.js
    --require reporter.js
`
module.exports = {
  default: `${common} features/**/*.feature`,
}


