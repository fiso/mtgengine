"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StupefyingTouch extends Card {
  constructor(game) {
    super(game, "Stupefying Touch", "Torment", "TOR");
  }
}

module.exports = StupefyingTouch;
