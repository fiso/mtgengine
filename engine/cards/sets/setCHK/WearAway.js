"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WearAway extends Card {
  constructor(game) {
    super(game, "Wear Away", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WearAway;
