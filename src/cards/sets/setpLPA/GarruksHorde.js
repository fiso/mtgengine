"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GarruksHorde extends UnimplementedCard {
  constructor (game) {
    super(game, "Garruk's Horde", "Launch Parties", "pLPA");
  }
}

module.exports = GarruksHorde;
