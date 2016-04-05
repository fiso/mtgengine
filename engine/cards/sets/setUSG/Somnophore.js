"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Somnophore extends UnimplementedCard {
  constructor(game) {
    super(game, "Somnophore", "Urza's Saga", "USG");
  }
}

module.exports = Somnophore;
