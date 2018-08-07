"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoggartHarbinger extends UnimplementedCard {
  constructor (game) {
    super(game, "Boggart Harbinger", "Lorwyn", "LRW");
  }
}

module.exports = BoggartHarbinger;
