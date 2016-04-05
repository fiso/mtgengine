"use strict";
const Constants = require ("../../../Constants");
const PriestofGixBase = require("../setDDE/PriestofGix");

class PriestofGix extends PriestofGixBase {
  constructor(game) {
    super(game, "Priest of Gix", "Urza's Saga", "USG");
  }
}

module.exports = PriestofGix;
