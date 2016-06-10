"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesBlessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Blessing", "Alliances", "ALL");
  }
}

module.exports = NaturesBlessing;
