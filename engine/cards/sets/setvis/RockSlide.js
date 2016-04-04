"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RockSlide extends Card {
  constructor(game) {
    super(game, "Rock Slide", "Visions", "VIS");
  }
}

module.exports = RockSlide;
