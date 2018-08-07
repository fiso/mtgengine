"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulblast extends UnimplementedCard {
  constructor (game) {
    super(game, "Soulblast", "Tenth Edition", "10E");
  }
}

module.exports = Soulblast;
