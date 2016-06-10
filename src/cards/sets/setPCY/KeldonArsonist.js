"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonArsonist extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Arsonist", "Prophecy", "PCY");
  }
}

module.exports = KeldonArsonist;
