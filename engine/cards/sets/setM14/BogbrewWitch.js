"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BogbrewWitch extends Card {
  constructor(game) {
    super(game, "Bogbrew Witch", "Magic 2014 Core Set", "M14");
  }
}

module.exports = BogbrewWitch;
