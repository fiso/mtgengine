"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SproutingVinesBase = require("../setC13/SproutingVines.js");

class SproutingVines extends SproutingVinesBase {
  constructor(game) {
    super(game, "Sprouting Vines", "Scourge", "SCG");
  }
}

module.exports = SproutingVines;
