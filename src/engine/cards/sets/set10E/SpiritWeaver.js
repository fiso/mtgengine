"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritWeaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Weaver", "Tenth Edition", "10E");
  }
}

module.exports = SpiritWeaver;
