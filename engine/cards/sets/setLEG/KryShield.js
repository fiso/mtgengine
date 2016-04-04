"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KryShield extends Card {
  constructor(game) {
    super(game, "Kry Shield", "Legends", "LEG");
  }
}

module.exports = KryShield;
