"use strict";
const Constants = require ("../../../Constants");
const TanglebloomBase = require("../setMRD/Tanglebloom");

class Tanglebloom extends TanglebloomBase {
  constructor (game) {
    super(game, "Tanglebloom", "Ninth Edition", "9ED");
  }
}

module.exports = Tanglebloom;
