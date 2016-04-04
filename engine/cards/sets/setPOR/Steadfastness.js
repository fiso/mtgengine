"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Steadfastness extends Card {
  constructor(game) {
    super(game, "Steadfastness", "Portal", "POR");
  }
}

module.exports = Steadfastness;
