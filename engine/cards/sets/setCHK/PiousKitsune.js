"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PiousKitsune extends Card {
  constructor(game) {
    super(game, "Pious Kitsune", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PiousKitsune;
