"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Royal Decree", "Masters Edition II", "ME2");
  }
}

module.exports = RoyalDecree;
