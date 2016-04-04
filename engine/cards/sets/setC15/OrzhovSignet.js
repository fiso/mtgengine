"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrzhovSignet extends Card {
  constructor(game) {
    super(game, "Orzhov Signet", "Commander 2015", "C15");
  }
}

module.exports = OrzhovSignet;
