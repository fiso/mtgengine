"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StormcallersBoon extends Card {
  constructor(game) {
    super(game, "Stormcaller's Boon", "Alara Reborn", "ARB");
  }
}

module.exports = StormcallersBoon;
