"use strict";
const Constants = require ("../../../Constants");
const RevivingDoseBase = require("../setCN2/RevivingDose");

class RevivingDose extends RevivingDoseBase {
  constructor (game) {
    super(game, "Reviving Dose", "Invasion", "INV");
  }
}

module.exports = RevivingDose;
