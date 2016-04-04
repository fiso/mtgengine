"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UnmakeBase = require("../setARC/Unmake.js");

class Unmake extends UnmakeBase {
  constructor(game) {
    super(game, "Unmake", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Unmake;
