"use strict";
const Constants = require ("../../../Constants");
const ErrandofDutyBase = require("../setME2/ErrandofDuty");

class ErrandofDuty extends ErrandofDutyBase {
  constructor (game) {
    super(game, "Errand of Duty", "Alliances", "ALL");
  }
}

module.exports = ErrandofDuty;
