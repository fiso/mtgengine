"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EgoErasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Ego Erasure", "Lorwyn", "LRW");
  }
}

module.exports = EgoErasure;
