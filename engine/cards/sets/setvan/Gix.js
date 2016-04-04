"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gix extends Card {
  constructor(game) {
    super(game, "Gix", "Vanguard", "VAN");
  }
}

module.exports = Gix;
