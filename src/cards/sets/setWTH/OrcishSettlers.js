"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishSettlers extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Settlers", "Weatherlight", "WTH");
  }
}

module.exports = OrcishSettlers;
