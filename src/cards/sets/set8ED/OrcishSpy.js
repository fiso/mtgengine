"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrcishSpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Orcish Spy", "Eighth Edition", "8ED");
  }
}

module.exports = OrcishSpy;
