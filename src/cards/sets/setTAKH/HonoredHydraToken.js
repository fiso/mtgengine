"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonoredHydraToken extends UnimplementedCard {
  constructor (game) {
    super(game, "Honored Hydra Token", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = HonoredHydraToken;
