"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LimDlsHex extends UnimplementedCard {
  constructor(game) {
    super(game, "Lim-Dûl's Hex", "Ice Age", "ICE");
  }
}

module.exports = LimDlsHex;
