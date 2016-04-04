"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BrandofIllOmen extends Card {
  constructor(game) {
    super(game, "Brand of Ill Omen", "Ice Age", "ICE");
  }
}

module.exports = BrandofIllOmen;
