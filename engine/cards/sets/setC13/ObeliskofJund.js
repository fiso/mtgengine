"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObeliskofJund extends UnimplementedCard {
  constructor(game) {
    super(game, "Obelisk of Jund", "Commander 2013 Edition", "C13");
  }
}

module.exports = ObeliskofJund;
