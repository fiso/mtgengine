"use strict";
const Constants = require ("../../../Constants");
const RevivingDoseBase = require("../setINV/RevivingDose");

class RevivingDose extends RevivingDoseBase {
  constructor (game) {
    super(game, "Reviving Dose", "Tenth Edition", "10E");
  }
}

module.exports = RevivingDose;
