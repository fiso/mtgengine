"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishBerserker extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Berserker", "Tenth Edition", "10E");
  }
}

module.exports = ElvishBerserker;
