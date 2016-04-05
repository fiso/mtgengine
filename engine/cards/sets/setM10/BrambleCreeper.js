"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrambleCreeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Bramble Creeper", "Magic 2010", "M10");
  }
}

module.exports = BrambleCreeper;
