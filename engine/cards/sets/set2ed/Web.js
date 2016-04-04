"use strict";
const Constants = require ("../../../Constants");
const WebBase = require("../setCED/Web");

class Web extends WebBase {
  constructor(game) {
    super(game, "Web", "Unlimited Edition", "2ED");
  }
}

module.exports = Web;
