"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaWeb extends Card {
  constructor(game) {
    super(game, "Mana Web", "Weatherlight", "WTH");
  }
}

module.exports = ManaWeb;
