"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GangofDevilsBase = require("../setAVR/GangofDevils.js");

class GangofDevils extends GangofDevilsBase {
  constructor(game) {
    super(game, "Gang of Devils", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = GangofDevils;
