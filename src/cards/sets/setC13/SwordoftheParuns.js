"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwordoftheParuns extends UnimplementedCard {
  constructor (game) {
    super(game, "Sword of the Paruns", "Commander 2013 Edition", "C13");
  }
}

module.exports = SwordoftheParuns;
