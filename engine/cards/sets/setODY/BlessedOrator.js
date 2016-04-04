"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlessedOratorBase = require("../set9ED/BlessedOrator.js");

class BlessedOrator extends BlessedOratorBase {
  constructor(game) {
    super(game, "Blessed Orator", "Odyssey", "ODY");
  }
}

module.exports = BlessedOrator;
