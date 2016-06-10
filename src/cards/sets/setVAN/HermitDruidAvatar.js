"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HermitDruidAvatar extends UnimplementedCard {
  constructor (game) {
    super(game, "Hermit Druid Avatar", "Vanguard", "VAN");
  }
}

module.exports = HermitDruidAvatar;
