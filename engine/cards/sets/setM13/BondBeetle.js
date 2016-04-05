"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BondBeetle extends UnimplementedCard {
  constructor(game) {
    super(game, "Bond Beetle", "Magic 2013", "M13");
  }
}

module.exports = BondBeetle;
