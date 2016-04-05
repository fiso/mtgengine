"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitheringWisps extends UnimplementedCard {
  constructor(game) {
    super(game, "Withering Wisps", "Ice Age", "ICE");
  }
}

module.exports = WitheringWisps;
