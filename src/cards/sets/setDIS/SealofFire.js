"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SealofFire extends UnimplementedCard {
  constructor(game) {
    super(game, "Seal of Fire", "Dissension", "DIS");
  }
}

module.exports = SealofFire;
