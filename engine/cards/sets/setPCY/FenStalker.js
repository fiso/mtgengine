"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FenStalker extends Card {
  constructor(game) {
    super(game, "Fen Stalker", "Prophecy", "PCY");
  }
}

module.exports = FenStalker;
