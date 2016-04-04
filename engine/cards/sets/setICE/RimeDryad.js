"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RimeDryad extends Card {
  constructor(game) {
    super(game, "Rime Dryad", "Ice Age", "ICE");
  }
}

module.exports = RimeDryad;
