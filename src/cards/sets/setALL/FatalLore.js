"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FatalLore extends UnimplementedCard {
  constructor (game) {
    super(game, "Fatal Lore", "Alliances", "ALL");
  }
}

module.exports = FatalLore;
