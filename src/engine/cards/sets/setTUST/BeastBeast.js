"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Beast // Beast", "Unstable Tokens", "TUST");
  }
}

module.exports = BeastBeast;
