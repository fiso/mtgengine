"use strict";
const Constants = require ("../../../Constants");
const SeeBeyondBase = require("../setPCA/SeeBeyond");

class SeeBeyond extends SeeBeyondBase {
  constructor (game) {
    super(game, "See Beyond", "Planechase 2012", "PC2");
  }
}

module.exports = SeeBeyond;
