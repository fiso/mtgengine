"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Urborg extends Card {
  constructor(game) {
    super(game, "Urborg", "Legends", "LEG");
  }
}

module.exports = Urborg;
