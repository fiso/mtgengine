"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaritimeGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Maritime Guard", "Magic 2011", "M11");
  }
}

module.exports = MaritimeGuard;
