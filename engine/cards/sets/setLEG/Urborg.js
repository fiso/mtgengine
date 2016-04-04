"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Urborg extends UnimplementedCard {
  constructor(game) {
    super(game, "Urborg", "Legends", "LEG");
  }
}

module.exports = Urborg;
