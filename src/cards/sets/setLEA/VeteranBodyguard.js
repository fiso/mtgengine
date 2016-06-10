"use strict";
const Constants = require ("../../../Constants");
const VeteranBodyguardBase = require("../setCED/VeteranBodyguard");

class VeteranBodyguard extends VeteranBodyguardBase {
  constructor (game) {
    super(game, "Veteran Bodyguard", "Limited Edition Alpha", "LEA");
  }
}

module.exports = VeteranBodyguard;
