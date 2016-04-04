"use strict";
const Constants = require ("../../../Constants");
const RenegadeWarlordBase = require("../setTMP/RenegadeWarlord");

class RenegadeWarlord extends RenegadeWarlordBase {
  constructor(game) {
    super(game, "Renegade Warlord", "Tempest Remastered", "TPR");
  }
}

module.exports = RenegadeWarlord;
