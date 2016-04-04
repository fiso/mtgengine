"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ColdSnap extends UnimplementedCard {
  constructor(game) {
    super(game, "Cold Snap", "Ice Age", "ICE");
  }
}

module.exports = ColdSnap;
