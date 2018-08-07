"use strict";
const Constants = require ("../../../Constants");
const WonderBase = require("../setCM2/Wonder");

class Wonder extends WonderBase {
  constructor (game) {
    super(game, "Wonder", "Judgment", "JUD");
  }
}

module.exports = Wonder;
