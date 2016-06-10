"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KondasBanner extends UnimplementedCard {
  constructor (game) {
    super(game, "Konda's Banner", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KondasBanner;
