"use strict";
const Constants = require ("../../../Constants");
const ReciprocateBase = require("../setCHK/Reciprocate");

class Reciprocate extends ReciprocateBase {
  constructor(game) {
    super(game, "Reciprocate", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Reciprocate;
