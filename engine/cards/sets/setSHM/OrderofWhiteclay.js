"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrderofWhiteclay extends Card {
  constructor(game) {
    super(game, "Order of Whiteclay", "Shadowmoor", "SHM");
  }
}

module.exports = OrderofWhiteclay;
