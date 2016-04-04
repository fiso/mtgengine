"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NoeticScales extends Card {
  constructor(game) {
    super(game, "Noetic Scales", "Urza's Saga", "USG");
  }
}

module.exports = NoeticScales;
