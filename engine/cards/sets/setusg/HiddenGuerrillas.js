"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HiddenGuerrillas extends Card {
  constructor(game) {
    super(game, "Hidden Guerrillas", "Urza's Saga", "USG");
  }
}

module.exports = HiddenGuerrillas;
