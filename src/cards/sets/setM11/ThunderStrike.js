"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunder Strike", "Magic 2011", "M11");
  }
}

module.exports = ThunderStrike;
