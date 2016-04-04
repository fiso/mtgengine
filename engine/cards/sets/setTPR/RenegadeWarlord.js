"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RenegadeWarlordBase = require("../setTMP/RenegadeWarlord.js");

class RenegadeWarlord extends RenegadeWarlordBase {
  constructor(game) {
    super(game, "Renegade Warlord", "Tempest Remastered", "TPR");
  }
}

module.exports = RenegadeWarlord;
