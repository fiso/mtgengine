"use strict";
const Constants = require ("../../../Constants");
const WebBase = require("../setCED/Web");

class Web extends WebBase {
  constructor (game) {
    super(game, "Web", "Revised Edition", "3ED");
  }
}

module.exports = Web;
