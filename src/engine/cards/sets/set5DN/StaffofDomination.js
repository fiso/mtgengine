"use strict";
const Constants = require ("../../../Constants");
const StaffofDominationBase = require("../setMPS/StaffofDomination");

class StaffofDomination extends StaffofDominationBase {
  constructor (game) {
    super(game, "Staff of Domination", "Fifth Dawn", "5DN");
  }
}

module.exports = StaffofDomination;
