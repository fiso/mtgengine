"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Blessing", "Masters Edition II", "ME2");
  }
}

module.exports = NaturesBlessing;
