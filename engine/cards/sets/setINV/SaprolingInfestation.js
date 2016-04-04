"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SaprolingInfestation extends Card {
  constructor(game) {
    super(game, "Saproling Infestation", "Invasion", "INV");
  }
}

module.exports = SaprolingInfestation;
