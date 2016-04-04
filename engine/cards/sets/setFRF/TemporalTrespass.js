"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TemporalTrespass extends Card {
  constructor(game) {
    super(game, "Temporal Trespass", "Fate Reforged", "FRF");
  }
}

module.exports = TemporalTrespass;
