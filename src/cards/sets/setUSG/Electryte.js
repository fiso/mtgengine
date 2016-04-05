"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Electryte extends UnimplementedCard {
  constructor(game) {
    super(game, "Electryte", "Urza's Saga", "USG");
  }
}

module.exports = Electryte;
