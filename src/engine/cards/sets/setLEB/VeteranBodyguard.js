"use strict";
const Constants = require ("../../../Constants");
const VeteranBodyguardBase = require("../setME4/VeteranBodyguard");

class VeteranBodyguard extends VeteranBodyguardBase {
  constructor (game) {
    super(game, "Veteran Bodyguard", "Limited Edition Beta", "LEB");
  }
}

module.exports = VeteranBodyguard;
