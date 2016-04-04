"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinWarStrikeBase = require("../setPO2/GoblinWarStrike.js");

class GoblinWarStrike extends GoblinWarStrikeBase {
  constructor(game) {
    super(game, "Goblin War Strike", "Scourge", "SCG");
  }
}

module.exports = GoblinWarStrike;
