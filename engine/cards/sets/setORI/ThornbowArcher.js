"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThornbowArcher extends Card {
  constructor(game) {
    super(game, "Thornbow Archer", "Magic Origins", "ORI");
  }
}

module.exports = ThornbowArcher;
