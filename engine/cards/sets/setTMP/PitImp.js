"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PitImp extends Card {
  constructor(game) {
    super(game, "Pit Imp", "Tempest", "TMP");
  }
}

module.exports = PitImp;
