"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalTrooper extends UnimplementedCard {
  constructor(game) {
    super(game, "Royal Trooper", "Masters Edition II", "ME2");
  }
}

module.exports = RoyalTrooper;
