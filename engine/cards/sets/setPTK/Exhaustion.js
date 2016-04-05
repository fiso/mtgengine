"use strict";
const Constants = require ("../../../Constants");
const ExhaustionBase = require("../set9ED/Exhaustion");

class Exhaustion extends ExhaustionBase {
  constructor(game) {
    super(game, "Exhaustion", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = Exhaustion;
