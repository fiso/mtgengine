"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Omen extends Card {
  constructor(game) {
    super(game, "Omen", "Portal", "POR");
  }
}

module.exports = Omen;
