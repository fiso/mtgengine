"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonBattlewagon extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Battlewagon", "Prophecy", "PCY");
  }
}

module.exports = KeldonBattlewagon;
