"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Guma extends UnimplementedCard {
  constructor(game) {
    super(game, "Guma", "Urza's Saga", "USG");
  }
}

module.exports = Guma;
