"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturesWill extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature's Will", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NaturesWill;
