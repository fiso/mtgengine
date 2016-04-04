"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TritonCavalry extends Card {
  constructor(game) {
    super(game, "Triton Cavalry", "Journey into Nyx", "JOU");
  }
}

module.exports = TritonCavalry;
