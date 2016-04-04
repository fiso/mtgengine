"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NegateBase = require("../setDTK/Negate.js");

class Negate extends NegateBase {
  constructor(game) {
    super(game, "Negate", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Negate;
