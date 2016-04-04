"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AladdinsLamp extends Card {
  constructor(game) {
    super(game, "Aladdin's Lamp", "Arabian Nights", "ARN");
  }
}

module.exports = AladdinsLamp;
