"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BeeSting extends Card {
  constructor(game) {
    super(game, "Bee Sting", "Masters Edition IV", "ME4");
  }
}

module.exports = BeeSting;
