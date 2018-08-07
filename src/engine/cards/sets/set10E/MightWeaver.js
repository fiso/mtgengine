"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MightWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Might Weaver", "Tenth Edition", "10E");
  }
}

module.exports = MightWeaver;
