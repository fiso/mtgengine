"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlightningBase = require("../setDDK/Blightning.js");

class Blightning extends BlightningBase {
  constructor(game) {
    super(game, "Blightning", "Magic Player Rewards", "pMPR");
  }
}

module.exports = Blightning;
