"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HighGround extends Card {
  constructor(game) {
    super(game, "High Ground", "Exodus", "EXO");
  }
}

module.exports = HighGround;
