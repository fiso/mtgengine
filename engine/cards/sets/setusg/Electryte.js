"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Electryte extends Card {
  constructor(game) {
    super(game, "Electryte", "Urza's Saga", "USG");
  }
}

module.exports = Electryte;
