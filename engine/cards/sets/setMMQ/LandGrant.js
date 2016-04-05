"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandGrant extends UnimplementedCard {
  constructor(game) {
    super(game, "Land Grant", "Mercadian Masques", "MMQ");
  }
}

module.exports = LandGrant;
