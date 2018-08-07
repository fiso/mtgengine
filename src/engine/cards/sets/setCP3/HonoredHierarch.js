"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonoredHierarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Honored Hierarch", "Magic Origins Clash Pack", "CP3");
  }
}

module.exports = HonoredHierarch;
