"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodlineKeeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Bloodline Keeper", "Innistrad", "ISD");
  }
}

module.exports = BloodlineKeeper;
