"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastBreath extends UnimplementedCard {
  constructor(game) {
    super(game, "Last Breath", "Mercadian Masques", "MMQ");
  }
}

module.exports = LastBreath;
