"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonMantle extends Card {
  constructor(game) {
    super(game, "Dragon Mantle", "Theros", "THS");
  }
}

module.exports = DragonMantle;
