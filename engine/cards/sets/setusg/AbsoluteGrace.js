"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbsoluteGrace extends Card {
  constructor(game) {
    super(game, "Absolute Grace", "Urza's Saga", "USG");
  }
}

module.exports = AbsoluteGrace;
