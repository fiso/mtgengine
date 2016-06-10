"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelsMercy extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel's Mercy", "Avacyn Restored", "AVR");
  }
}

module.exports = AngelsMercy;
