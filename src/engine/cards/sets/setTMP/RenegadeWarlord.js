"use strict";
const Constants = require ("../../../Constants");
const RenegadeWarlordBase = require("../setTPR/RenegadeWarlord");

class RenegadeWarlord extends RenegadeWarlordBase {
  constructor (game) {
    super(game, "Renegade Warlord", "Tempest", "TMP");
  }
}

module.exports = RenegadeWarlord;
