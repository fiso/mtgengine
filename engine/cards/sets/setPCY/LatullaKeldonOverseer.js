"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LatullaKeldonOverseer extends Card {
  constructor(game) {
    super(game, "Latulla, Keldon Overseer", "Prophecy", "PCY");
  }
}

module.exports = LatullaKeldonOverseer;
