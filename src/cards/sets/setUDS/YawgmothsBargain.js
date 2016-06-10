"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YawgmothsBargain extends UnimplementedCard {
  constructor (game) {
    super(game, "Yawgmoth's Bargain", "Urza's Destiny", "UDS");
  }
}

module.exports = YawgmothsBargain;
