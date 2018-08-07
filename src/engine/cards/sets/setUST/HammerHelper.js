"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HammerHelper extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammer Helper", "Unstable", "UST");
  }
}

module.exports = HammerHelper;
