"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HonoredHierarch extends UnimplementedCard {
  constructor (game) {
    super(game, "Honored Hierarch", "Magic Origins", "ORI");
  }
}

module.exports = HonoredHierarch;
