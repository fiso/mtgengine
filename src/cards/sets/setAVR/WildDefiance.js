"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildDefiance extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Defiance", "Avacyn Restored", "AVR");
  }
}

module.exports = WildDefiance;
