"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Acridian extends UnimplementedCard {
  constructor(game) {
    super(game, "Acridian", "Urza's Saga", "USG");
  }
}

module.exports = Acridian;
