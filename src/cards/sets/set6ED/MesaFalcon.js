"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MesaFalcon extends UnimplementedCard {
  constructor (game) {
    super(game, "Mesa Falcon", "Classic Sixth Edition", "6ED");
  }
}

module.exports = MesaFalcon;
