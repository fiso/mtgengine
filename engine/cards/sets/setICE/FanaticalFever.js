"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FanaticalFever extends UnimplementedCard {
  constructor(game) {
    super(game, "Fanatical Fever", "Ice Age", "ICE");
  }
}

module.exports = FanaticalFever;
