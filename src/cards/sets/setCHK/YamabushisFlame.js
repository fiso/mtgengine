"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YamabushisFlame extends UnimplementedCard {
  constructor (game) {
    super(game, "Yamabushi's Flame", "Champions of Kamigawa", "CHK");
  }
}

module.exports = YamabushisFlame;
