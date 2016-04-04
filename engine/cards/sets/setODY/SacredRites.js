"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacredRites extends Card {
  constructor(game) {
    super(game, "Sacred Rites", "Odyssey", "ODY");
  }
}

module.exports = SacredRites;
