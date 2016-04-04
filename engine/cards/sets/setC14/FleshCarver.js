"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FleshCarver extends Card {
  constructor(game) {
    super(game, "Flesh Carver", "Commander 2014", "C14");
  }
}

module.exports = FleshCarver;
