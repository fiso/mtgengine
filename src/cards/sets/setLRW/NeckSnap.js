"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeckSnap extends UnimplementedCard {
  constructor(game) {
    super(game, "Neck Snap", "Lorwyn", "LRW");
  }
}

module.exports = NeckSnap;
