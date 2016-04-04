"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormElementalBase = require("../setALL/StormElemental.js");

class StormElemental extends StormElementalBase {
  constructor(game) {
    super(game, "Storm Elemental", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = StormElemental;
