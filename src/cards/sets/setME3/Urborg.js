"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Urborg extends UnimplementedCard {
  constructor (game) {
    super(game, "Urborg", "Masters Edition III", "ME3");
  }
}

module.exports = Urborg;
