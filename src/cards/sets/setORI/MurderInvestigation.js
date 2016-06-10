"use strict";
const Constants = require ("../../../Constants");
const MurderInvestigationBase = require("../setGTC/MurderInvestigation");

class MurderInvestigation extends MurderInvestigationBase {
  constructor (game) {
    super(game, "Murder Investigation", "Magic Origins", "ORI");
  }
}

module.exports = MurderInvestigation;
