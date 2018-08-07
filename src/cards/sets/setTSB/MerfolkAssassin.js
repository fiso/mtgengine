"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MerfolkAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Merfolk Assassin", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = MerfolkAssassin;
