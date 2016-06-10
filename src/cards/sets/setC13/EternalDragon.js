"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Eternal Dragon", "Commander 2013 Edition", "C13");
  }
}

module.exports = EternalDragon;
