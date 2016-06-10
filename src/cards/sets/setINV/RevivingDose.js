"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RevivingDose extends UnimplementedCard {
  constructor (game) {
    super(game, "Reviving Dose", "Invasion", "INV");
  }
}

module.exports = RevivingDose;
