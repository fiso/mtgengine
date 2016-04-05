"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LatullaKeldonOverseer extends UnimplementedCard {
  constructor(game) {
    super(game, "Latulla, Keldon Overseer", "Prophecy", "PCY");
  }
}

module.exports = LatullaKeldonOverseer;
