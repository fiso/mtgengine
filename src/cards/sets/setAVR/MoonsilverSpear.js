"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonsilverSpear extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonsilver Spear", "Avacyn Restored", "AVR");
  }
}

module.exports = MoonsilverSpear;
