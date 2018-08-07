"use strict";
const Constants = require ("../../../Constants");
const TirelessMissionariesBase = require("../setM15/TirelessMissionaries");

class TirelessMissionaries extends TirelessMissionariesBase {
  constructor (game) {
    super(game, "Tireless Missionaries", "Magic 2011", "M11");
  }
}

module.exports = TirelessMissionaries;
