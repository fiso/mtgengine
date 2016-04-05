"use strict";
const Constants = require ("../../../Constants");
const WonderBase = require("../setC13/Wonder");

class Wonder extends WonderBase {
  constructor(game) {
    super(game, "Wonder", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Wonder;
