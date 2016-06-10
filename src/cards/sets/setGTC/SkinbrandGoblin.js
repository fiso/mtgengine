"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkinbrandGoblin extends UnimplementedCard {
  constructor (game) {
    super(game, "Skinbrand Goblin", "Gatecrash", "GTC");
  }
}

module.exports = SkinbrandGoblin;
