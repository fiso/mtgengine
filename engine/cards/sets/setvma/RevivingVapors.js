"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RevivingVaporsBase = require("../setINV/RevivingVapors.js");

class RevivingVapors extends RevivingVaporsBase {
  constructor(game) {
    super(game, "Reviving Vapors", "Vintage Masters", "VMA");
  }
}

module.exports = RevivingVapors;
