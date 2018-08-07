"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalachiteTalisman extends UnimplementedCard {
  constructor (game) {
    super(game, "Malachite Talisman", "Ice Age", "ICE");
  }
}

module.exports = MalachiteTalisman;
