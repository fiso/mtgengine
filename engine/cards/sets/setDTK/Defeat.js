"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Defeat extends Card {
  constructor(game) {
    super(game, "Defeat", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Defeat;
