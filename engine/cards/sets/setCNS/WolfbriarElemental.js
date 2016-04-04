"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WolfbriarElementalBase = require("../setC14/WolfbriarElemental.js");

class WolfbriarElemental extends WolfbriarElementalBase {
  constructor(game) {
    super(game, "Wolfbriar Elemental", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = WolfbriarElemental;
