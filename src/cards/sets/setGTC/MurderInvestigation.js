"use strict";
const Constants = require ("../../../Constants");
const MurderInvestigationBase = require("../setORI/MurderInvestigation");

class MurderInvestigation extends MurderInvestigationBase {
  constructor (game) {
    super(game, "Murder Investigation", "Gatecrash", "GTC");
  }
}

module.exports = MurderInvestigation;
