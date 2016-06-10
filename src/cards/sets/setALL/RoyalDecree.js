"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Royal Decree", "Alliances", "ALL");
  }
}

module.exports = RoyalDecree;
