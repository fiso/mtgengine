"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PriestofGixBase = require("../setDDE/PriestofGix.js");

class PriestofGix extends PriestofGixBase {
  constructor(game) {
    super(game, "Priest of Gix", "Urza's Saga", "USG");
  }
}

module.exports = PriestofGix;
