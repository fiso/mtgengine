"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnotvinePaladin extends Card {
  constructor(game) {
    super(game, "Knotvine Paladin", "Alara Reborn", "ARB");
  }
}

module.exports = KnotvinePaladin;
