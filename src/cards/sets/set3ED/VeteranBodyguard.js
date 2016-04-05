"use strict";
const Constants = require ("../../../Constants");
const VeteranBodyguardBase = require("../setCED/VeteranBodyguard");

class VeteranBodyguard extends VeteranBodyguardBase {
  constructor(game) {
    super(game, "Veteran Bodyguard", "Revised Edition", "3ED");
  }
}

module.exports = VeteranBodyguard;
