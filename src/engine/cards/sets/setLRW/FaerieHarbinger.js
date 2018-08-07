"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieHarbinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = FaerieHarbinger;
