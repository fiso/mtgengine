"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VeteranBodyguardBase = require("../setCED/VeteranBodyguard.js");

class VeteranBodyguard extends VeteranBodyguardBase {
  constructor(game) {
    super(game, "Veteran Bodyguard", "Masters Edition IV", "ME4");
  }
}

module.exports = VeteranBodyguard;
