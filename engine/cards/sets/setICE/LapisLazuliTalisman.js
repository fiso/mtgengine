"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LapisLazuliTalisman extends Card {
  constructor(game) {
    super(game, "Lapis Lazuli Talisman", "Ice Age", "ICE");
  }
}

module.exports = LapisLazuliTalisman;
