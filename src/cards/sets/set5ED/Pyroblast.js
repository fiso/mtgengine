"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pyroblast extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyroblast", "Fifth Edition", "5ED");
  }
}

module.exports = Pyroblast;
