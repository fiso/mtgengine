"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrderofWhiteclay extends UnimplementedCard {
  constructor (game) {
    super(game, "Order of Whiteclay", "Shadowmoor", "SHM");
  }
}

module.exports = OrderofWhiteclay;
