"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TolarianWinds extends Card {
  constructor(game) {
    super(game, "Tolarian Winds", "Beatdown Box Set", "BTD");
  }
}

module.exports = TolarianWinds;
