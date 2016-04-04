"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CorpseDanceBase = require("../setTMP/CorpseDance.js");

class CorpseDance extends CorpseDanceBase {
  constructor(game) {
    super(game, "Corpse Dance", "Tempest Remastered", "TPR");
  }
}

module.exports = CorpseDance;
