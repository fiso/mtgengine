"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeshracsSigil extends UnimplementedCard {
  constructor(game) {
    super(game, "Leshrac's Sigil", "Ice Age", "ICE");
  }
}

module.exports = LeshracsSigil;
