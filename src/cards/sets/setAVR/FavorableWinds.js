"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FavorableWinds extends UnimplementedCard {
  constructor (game) {
    super(game, "Favorable Winds", "Avacyn Restored", "AVR");
  }
}

module.exports = FavorableWinds;
