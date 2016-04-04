"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlagueStingerBase = require("../setSOM/PlagueStinger.js");

class PlagueStinger extends PlagueStingerBase {
  constructor(game) {
    super(game, "Plague Stinger", "WPN and Gateway", "pWPN");
  }
}

module.exports = PlagueStinger;
