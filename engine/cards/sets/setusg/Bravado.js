"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bravado extends UnimplementedCard {
  constructor(game) {
    super(game, "Bravado", "Urza's Saga", "USG");
  }
}

module.exports = Bravado;
