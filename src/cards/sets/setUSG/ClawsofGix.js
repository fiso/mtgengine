"use strict";
const Constants = require ("../../../Constants");
const ClawsofGixBase = require("../setTSB/ClawsofGix");

class ClawsofGix extends ClawsofGixBase {
  constructor (game) {
    super(game, "Claws of Gix", "Urza's Saga", "USG");
  }
}

module.exports = ClawsofGix;
