"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AmbuscadeShaman extends Card {
  constructor(game) {
    super(game, "Ambuscade Shaman", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AmbuscadeShaman;
