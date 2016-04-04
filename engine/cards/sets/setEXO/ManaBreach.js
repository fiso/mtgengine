"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaBreach extends Card {
  constructor(game) {
    super(game, "Mana Breach", "Exodus", "EXO");
  }
}

module.exports = ManaBreach;
