"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeoninBladetrapBase = require("../setC13/LeoninBladetrap.js");

class LeoninBladetrap extends LeoninBladetrapBase {
  constructor(game) {
    super(game, "Leonin Bladetrap", "Mirrodin", "MRD");
  }
}

module.exports = LeoninBladetrap;
