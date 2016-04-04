"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KikuNightsFlower extends Card {
  constructor(game) {
    super(game, "Kiku, Night's Flower", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KikuNightsFlower;
