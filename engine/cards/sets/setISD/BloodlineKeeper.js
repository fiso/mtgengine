"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodlineKeeper extends Card {
  constructor(game) {
    super(game, "Bloodline Keeper", "Innistrad", "ISD");
  }
}

module.exports = BloodlineKeeper;
