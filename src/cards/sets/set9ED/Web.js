"use strict";
const Constants = require ("../../../Constants");
const WebBase = require("../setCED/Web");

class Web extends WebBase {
  constructor (game) {
    super(game, "Web", "Ninth Edition", "9ED");
  }
}

module.exports = Web;
