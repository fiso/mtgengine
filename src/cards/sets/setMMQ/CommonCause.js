"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CommonCause extends UnimplementedCard {
  constructor (game) {
    super(game, "Common Cause", "Mercadian Masques", "MMQ");
  }
}

module.exports = CommonCause;
