"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShovingMatch extends UnimplementedCard {
  constructor(game) {
    super(game, "Shoving Match", "Mercadian Masques", "MMQ");
  }
}

module.exports = ShovingMatch;
