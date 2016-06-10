"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesWrath extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Wrath", "Alliances", "ALL");
  }
}

module.exports = NaturesWrath;
