"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scarecrone extends UnimplementedCard {
  constructor (game) {
    super(game, "Scarecrone", "Eventide", "EVE");
  }
}

module.exports = Scarecrone;
