"use strict";
const Constants = require ("../../../Constants");
const ReachThroughMistsBase = require("../setCHK/ReachThroughMists");

class ReachThroughMists extends ReachThroughMistsBase {
  constructor(game) {
    super(game, "Reach Through Mists", "Modern Masters", "MMA");
  }
}

module.exports = ReachThroughMists;
