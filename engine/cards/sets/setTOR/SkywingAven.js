"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkywingAven extends Card {
  constructor(game) {
    super(game, "Skywing Aven", "Torment", "TOR");
  }
}

module.exports = SkywingAven;
