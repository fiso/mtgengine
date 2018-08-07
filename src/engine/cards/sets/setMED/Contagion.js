"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Contagion extends UnimplementedCard {
  constructor (game) {
    super(game, "Contagion", "Masters Edition", "MED");
  }
}

module.exports = Contagion;
