"use strict";
const Constants = require ("../../../Constants");
const TirelessMissionariesBase = require("../setM11/TirelessMissionaries");

class TirelessMissionaries extends TirelessMissionariesBase {
  constructor(game) {
    super(game, "Tireless Missionaries", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TirelessMissionaries;
