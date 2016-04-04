"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteelshaperApprentice extends Card {
  constructor(game) {
    super(game, "Steelshaper Apprentice", "Darksteel", "DST");
  }
}

module.exports = SteelshaperApprentice;
