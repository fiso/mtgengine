"use strict";
const Constants = require ("../../../Constants");
const VeteranBodyguardBase = require("../setCED/VeteranBodyguard");

class VeteranBodyguard extends VeteranBodyguardBase {
  constructor (game) {
    super(game, "Veteran Bodyguard", "Unlimited Edition", "2ED");
  }
}

module.exports = VeteranBodyguard;
