"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fruition extends Card {
  constructor(game) {
    super(game, "Fruition", "Portal", "POR");
  }
}

module.exports = Fruition;
