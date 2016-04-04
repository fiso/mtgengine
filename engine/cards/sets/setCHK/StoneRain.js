"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoneRain extends Card {
  constructor(game) {
    super(game, "Stone Rain", "Champions of Kamigawa", "CHK");
  }
}

module.exports = StoneRain;
