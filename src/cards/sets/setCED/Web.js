"use strict";
const Constants = require ("../../../Constants");
const WebBase = require("../set9ED/Web");

class Web extends WebBase {
  constructor (game) {
    super(game, "Web", "Collectors’ Edition", "CED");
  }
}

module.exports = Web;
