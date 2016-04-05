"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesChosen extends UnimplementedCard {
  constructor(game) {
    super(game, "Nature's Chosen", "Alliances", "ALL");
  }
}

module.exports = NaturesChosen;
