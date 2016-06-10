"use strict";
const Constants = require ("../../../Constants");
const KozileksPredatorBase = require("../setMM2/KozileksPredator");

class KozileksPredator extends KozileksPredatorBase {
  constructor (game) {
    super(game, "Kozilek's Predator", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = KozileksPredator;
