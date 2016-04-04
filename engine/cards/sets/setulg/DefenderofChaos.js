"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DefenderofChaos extends Card {
  constructor(game) {
    super(game, "Defender of Chaos", "Urza's Legacy", "ULG");
  }
}

module.exports = DefenderofChaos;
