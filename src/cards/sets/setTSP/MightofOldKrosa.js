"use strict";
const Constants = require ("../../../Constants");
const MightofOldKrosaBase = require("../setMM3/MightofOldKrosa");

class MightofOldKrosa extends MightofOldKrosaBase {
  constructor (game) {
    super(game, "Might of Old Krosa", "Time Spiral", "TSP");
  }
}

module.exports = MightofOldKrosa;
