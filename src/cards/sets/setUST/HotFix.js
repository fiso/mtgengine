"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HotFix extends UnimplementedCard {
  constructor (game) {
    super(game, "Hot Fix", "Unstable", "UST");
  }
}

module.exports = HotFix;
