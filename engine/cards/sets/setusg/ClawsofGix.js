"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ClawsofGixBase = require("../setTSB/ClawsofGix.js");

class ClawsofGix extends ClawsofGixBase {
  constructor(game) {
    super(game, "Claws of Gix", "Urza's Saga", "USG");
  }
}

module.exports = ClawsofGix;
