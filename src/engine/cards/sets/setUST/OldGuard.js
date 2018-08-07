"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OldGuard extends UnimplementedCard {
  constructor (game) {
    super(game, "Old Guard", "Unstable", "UST");
  }
}

module.exports = OldGuard;
