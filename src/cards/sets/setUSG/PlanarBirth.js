"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PlanarBirth extends UnimplementedCard {
  constructor (game) {
    super(game, "Planar Birth", "Urza's Saga", "USG");
  }
}

module.exports = PlanarBirth;
