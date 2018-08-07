"use strict";
const Constants = require ("../../../Constants");
const VolcanicOfferingBase = require("../setCM2/VolcanicOffering");

class VolcanicOffering extends VolcanicOfferingBase {
  constructor (game) {
    super(game, "Volcanic Offering", "Commander 2014", "C14");
  }
}

module.exports = VolcanicOffering;
