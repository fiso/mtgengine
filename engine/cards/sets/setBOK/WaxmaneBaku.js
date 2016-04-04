"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaxmaneBaku extends Card {
  constructor(game) {
    super(game, "Waxmane Baku", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = WaxmaneBaku;
