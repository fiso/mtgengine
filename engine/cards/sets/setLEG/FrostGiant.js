"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrostGiant extends Card {
  constructor(game) {
    super(game, "Frost Giant", "Legends", "LEG");
  }
}

module.exports = FrostGiant;
