"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HerosDownfall extends Card {
  constructor(game) {
    super(game, "Hero's Downfall", "Clash Pack", "CPK");
  }
}

module.exports = HerosDownfall;
