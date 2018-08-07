"use strict";
const Constants = require ("../../../Constants");
const WonderBase = require("../setCM2/Wonder");

class Wonder extends WonderBase {
  constructor (game) {
    super(game, "Wonder", "Commander Anthology", "CMA");
  }
}

module.exports = Wonder;
