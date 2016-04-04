"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MurderInvestigationBase = require("../setGTC/MurderInvestigation.js");

class MurderInvestigation extends MurderInvestigationBase {
  constructor(game) {
    super(game, "Murder Investigation", "Magic Origins", "ORI");
  }
}

module.exports = MurderInvestigation;
