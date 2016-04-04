"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ExhaustionBase = require("../set9ED/Exhaustion.js");

class Exhaustion extends ExhaustionBase {
  constructor(game) {
    super(game, "Exhaustion", "Starter 1999", "S99");
  }
}

module.exports = Exhaustion;
