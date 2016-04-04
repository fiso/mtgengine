"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticMeditation extends Card {
  constructor(game) {
    super(game, "Mystic Meditation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MysticMeditation;
