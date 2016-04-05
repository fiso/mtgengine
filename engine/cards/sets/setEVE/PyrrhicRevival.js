"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyrrhicRevival extends UnimplementedCard {
  constructor(game) {
    super(game, "Pyrrhic Revival", "Eventide", "EVE");
  }
}

module.exports = PyrrhicRevival;
