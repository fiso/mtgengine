"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ErrandofDutyBase = require("../setALL/ErrandofDuty.js");

class ErrandofDuty extends ErrandofDutyBase {
  constructor(game) {
    super(game, "Errand of Duty", "Masters Edition II", "ME2");
  }
}

module.exports = ErrandofDuty;
