"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EndemicPlague extends Card {
  constructor(game) {
    super(game, "Endemic Plague", "Onslaught", "ONS");
  }
}

module.exports = EndemicPlague;
