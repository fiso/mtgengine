"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesWrath extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Wrath", "Masters Edition II", "ME2");
  }
}

module.exports = NaturesWrath;
