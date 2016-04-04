"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefenderofLaw extends Card {
  constructor(game) {
    super(game, "Defender of Law", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenderofLaw;
