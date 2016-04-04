"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Somnophore extends Card {
  constructor(game) {
    super(game, "Somnophore", "Urza's Saga", "USG");
  }
}

module.exports = Somnophore;
