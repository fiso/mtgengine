"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ViolentImpact extends UnimplementedCard {
  constructor (game) {
    super(game, "Violent Impact", "Amonkhet", "AKH");
  }
}

module.exports = ViolentImpact;
