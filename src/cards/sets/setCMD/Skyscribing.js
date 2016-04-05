"use strict";
const Constants = require ("../../../Constants");
const SkyscribingBase = require("../setC13/Skyscribing");

class Skyscribing extends SkyscribingBase {
  constructor(game) {
    super(game, "Skyscribing", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Skyscribing;
