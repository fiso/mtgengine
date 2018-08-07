"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonBerserker extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Berserker", "Prophecy", "PCY");
  }
}

module.exports = KeldonBerserker;
