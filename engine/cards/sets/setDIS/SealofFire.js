"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SealofFire extends Card {
  constructor(game) {
    super(game, "Seal of Fire", "Dissension", "DIS");
  }
}

module.exports = SealofFire;
