"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReciprocateBase = require("../setCHK/Reciprocate.js");

class Reciprocate extends ReciprocateBase {
  constructor(game) {
    super(game, "Reciprocate", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Reciprocate;
