"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanElementalist extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Elementalist", "Ice Age", "ICE");
  }
}

module.exports = KrovikanElementalist;
