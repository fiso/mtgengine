"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MiraculousRecoveryBase = require("../setDDL/MiraculousRecovery.js");

class MiraculousRecovery extends MiraculousRecoveryBase {
  constructor(game) {
    super(game, "Miraculous Recovery", "Visions", "VIS");
  }
}

module.exports = MiraculousRecovery;
