"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderBrute extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunder Brute", "Born of the Gods", "BNG");
  }
}

module.exports = ThunderBrute;
