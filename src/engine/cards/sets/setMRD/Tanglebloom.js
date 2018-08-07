"use strict";
const Constants = require ("../../../Constants");
const TanglebloomBase = require("../set9ED/Tanglebloom");

class Tanglebloom extends TanglebloomBase {
  constructor (game) {
    super(game, "Tanglebloom", "Mirrodin", "MRD");
  }
}

module.exports = Tanglebloom;
