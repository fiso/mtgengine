"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevivingDose extends UnimplementedCard {
  constructor (game) {
    super(game, "Reviving Dose", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = RevivingDose;
