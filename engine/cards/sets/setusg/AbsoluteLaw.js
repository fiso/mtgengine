"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AbsoluteLaw extends Card {
  constructor(game) {
    super(game, "Absolute Law", "Urza's Saga", "USG");
  }
}

module.exports = AbsoluteLaw;
