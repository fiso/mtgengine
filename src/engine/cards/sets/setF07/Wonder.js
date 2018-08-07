"use strict";
const Constants = require ("../../../Constants");
const WonderBase = require("../setCM2/Wonder");

class Wonder extends WonderBase {
  constructor (game) {
    super(game, "Wonder", "Friday Night Magic 2007", "F07");
  }
}

module.exports = Wonder;
