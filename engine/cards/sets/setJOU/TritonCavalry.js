"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TritonCavalry extends UnimplementedCard {
  constructor(game) {
    super(game, "Triton Cavalry", "Journey into Nyx", "JOU");
  }
}

module.exports = TritonCavalry;
