"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReachThroughMistsBase = require("../setCHK/ReachThroughMists.js");

class ReachThroughMists extends ReachThroughMistsBase {
  constructor(game) {
    super(game, "Reach Through Mists", "Modern Masters", "MMA");
  }
}

module.exports = ReachThroughMists;
