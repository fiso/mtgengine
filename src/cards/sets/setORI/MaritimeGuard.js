"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaritimeGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Maritime Guard", "Magic Origins", "ORI");
  }
}

module.exports = MaritimeGuard;
