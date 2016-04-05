"use strict";
const Constants = require ("../../../Constants");
const VeteranBodyguardBase = require("../setCED/VeteranBodyguard");

class VeteranBodyguard extends VeteranBodyguardBase {
  constructor(game) {
    super(game, "Veteran Bodyguard", "International Collector's Edition", "CEI");
  }
}

module.exports = VeteranBodyguard;
