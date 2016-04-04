"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwarvenVigilantes extends Card {
  constructor(game) {
    super(game, "Dwarven Vigilantes", "Visions", "VIS");
  }
}

module.exports = DwarvenVigilantes;
