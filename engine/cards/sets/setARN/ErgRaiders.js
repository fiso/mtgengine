"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ErgRaiders extends Card {
  constructor(game) {
    super(game, "Erg Raiders", "Arabian Nights", "ARN");
  }
}

module.exports = ErgRaiders;
