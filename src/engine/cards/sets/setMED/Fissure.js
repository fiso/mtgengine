"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fissure extends UnimplementedCard {
  constructor (game) {
    super(game, "Fissure", "Masters Edition", "MED");
  }
}

module.exports = Fissure;
