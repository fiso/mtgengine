"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HateWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Hate Weaver", "Tenth Edition", "10E");
  }
}

module.exports = HateWeaver;
