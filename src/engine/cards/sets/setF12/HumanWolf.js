"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HumanWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Human // Wolf", "Friday Night Magic 2012", "F12");
  }
}

module.exports = HumanWolf;
