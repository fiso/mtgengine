"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AlabarasCarpet extends Card {
  constructor(game) {
    super(game, "Al-abara's Carpet", "Legends", "LEG");
  }
}

module.exports = AlabarasCarpet;
