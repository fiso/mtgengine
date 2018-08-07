"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidnightRitual extends UnimplementedCard {
  constructor (game) {
    super(game, "Midnight Ritual", "Tenth Edition", "10E");
  }
}

module.exports = MidnightRitual;
