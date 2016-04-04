"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RevivingDose extends Card {
  constructor(game) {
    super(game, "Reviving Dose", "Invasion", "INV");
  }
}

module.exports = RevivingDose;
