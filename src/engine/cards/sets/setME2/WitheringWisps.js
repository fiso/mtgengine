"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitheringWisps extends UnimplementedCard {
  constructor (game) {
    super(game, "Withering Wisps", "Masters Edition II", "ME2");
  }
}

module.exports = WitheringWisps;
