"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MorselTheft extends Card {
  constructor(game) {
    super(game, "Morsel Theft", "Morningtide", "MOR");
  }
}

module.exports = MorselTheft;
