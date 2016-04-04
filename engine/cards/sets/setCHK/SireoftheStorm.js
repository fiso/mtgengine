"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SireoftheStorm extends Card {
  constructor(game) {
    super(game, "Sire of the Storm", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SireoftheStorm;
