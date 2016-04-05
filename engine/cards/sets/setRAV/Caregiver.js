"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Caregiver extends UnimplementedCard {
  constructor(game) {
    super(game, "Caregiver", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Caregiver;
