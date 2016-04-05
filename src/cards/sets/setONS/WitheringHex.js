"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitheringHex extends UnimplementedCard {
  constructor(game) {
    super(game, "Withering Hex", "Onslaught", "ONS");
  }
}

module.exports = WitheringHex;
