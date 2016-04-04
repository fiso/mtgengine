"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Scald extends Card {
  constructor(game) {
    super(game, "Scald", "Urza's Saga", "USG");
  }
}

module.exports = Scald;
