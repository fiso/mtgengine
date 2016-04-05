"use strict";
const Constants = require ("../../../Constants");
const WebBase = require("../setCED/Web");

class Web extends WebBase {
  constructor(game) {
    super(game, "Web", "Fourth Edition", "4ED");
  }
}

module.exports = Web;
