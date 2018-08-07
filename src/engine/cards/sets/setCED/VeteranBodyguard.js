"use strict";
const Constants = require ("../../../Constants");
const VeteranBodyguardBase = require("../setME4/VeteranBodyguard");

class VeteranBodyguard extends VeteranBodyguardBase {
  constructor (game) {
    super(game, "Veteran Bodyguard", "Collectors’ Edition", "CED");
  }
}

module.exports = VeteranBodyguard;
