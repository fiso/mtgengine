"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TurntoDust extends Card {
  constructor(game) {
    super(game, "Turn to Dust", "Mirrodin", "MRD");
  }
}

module.exports = TurntoDust;
