"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaveTiger extends Card {
  constructor(game) {
    super(game, "Cave Tiger", "Urza's Saga", "USG");
  }
}

module.exports = CaveTiger;
