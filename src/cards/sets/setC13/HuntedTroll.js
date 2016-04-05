"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntedTroll extends UnimplementedCard {
  constructor(game) {
    super(game, "Hunted Troll", "Commander 2013 Edition", "C13");
  }
}

module.exports = HuntedTroll;
