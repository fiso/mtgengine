"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrutalExpulsion extends Card {
  constructor(game) {
    super(game, "Brutal Expulsion", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BrutalExpulsion;
