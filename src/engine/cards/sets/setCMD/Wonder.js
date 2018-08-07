"use strict";
const Constants = require ("../../../Constants");
const WonderBase = require("../setCM2/Wonder");

class Wonder extends WonderBase {
  constructor (game) {
    super(game, "Wonder", "Commander 2011", "CMD");
  }
}

module.exports = Wonder;
