"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassofGhouls extends UnimplementedCard {
  constructor (game) {
    super(game, "Mass of Ghouls", "Tenth Edition", "10E");
  }
}

module.exports = MassofGhouls;
