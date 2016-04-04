"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OliviasBloodsworn extends UnimplementedCard {
  constructor(game) {
    super(game, "Olivia's Bloodsworn", "Shadows over Innistrad", "SOI");
  }
}

module.exports = OliviasBloodsworn;
