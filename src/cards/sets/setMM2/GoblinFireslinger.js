"use strict";
const Constants = require ("../../../Constants");
const GoblinFireslingerBase = require("../setM12/GoblinFireslinger");

class GoblinFireslinger extends GoblinFireslingerBase {
  constructor (game) {
    super(game, "Goblin Fireslinger", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = GoblinFireslinger;
