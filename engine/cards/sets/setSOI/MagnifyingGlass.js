"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagnifyingGlass extends UnimplementedCard {
  constructor(game) {
    super(game, "Magnifying Glass", "Shadows over Innistrad", "SOI");
  }
}

module.exports = MagnifyingGlass;
