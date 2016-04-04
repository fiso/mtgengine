"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlightedShaman extends Card {
  constructor(game) {
    super(game, "Blighted Shaman", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BlightedShaman;
