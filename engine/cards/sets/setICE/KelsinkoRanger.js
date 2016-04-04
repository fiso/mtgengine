"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KelsinkoRanger extends UnimplementedCard {
  constructor(game) {
    super(game, "Kelsinko Ranger", "Ice Age", "ICE");
  }
}

module.exports = KelsinkoRanger;
