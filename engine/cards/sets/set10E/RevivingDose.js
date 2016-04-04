"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RevivingDoseBase = require("../setINV/RevivingDose.js");

class RevivingDose extends RevivingDoseBase {
  constructor(game) {
    super(game, "Reviving Dose", "Tenth Edition", "10E");
  }
}

module.exports = RevivingDose;
