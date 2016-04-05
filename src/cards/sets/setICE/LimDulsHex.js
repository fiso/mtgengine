"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDulsHex extends UnimplementedCard {
  constructor(game) {
    super(game, "Lim-Dûl's Hex", "Ice Age", "ICE");
  }
}

module.exports = LimDulsHex;
