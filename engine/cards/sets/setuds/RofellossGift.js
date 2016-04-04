"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RofellossGift extends UnimplementedCard {
  constructor(game) {
    super(game, "Rofellos's Gift", "Urza's Destiny", "UDS");
  }
}

module.exports = RofellossGift;
