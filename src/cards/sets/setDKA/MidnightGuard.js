"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidnightGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Midnight Guard", "Dark Ascension", "DKA");
  }
}

module.exports = MidnightGuard;
