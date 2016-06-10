"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BludgeonBrawl extends UnimplementedCard {
  constructor (game) {
    super(game, "Bludgeon Brawl", "New Phyrexia", "NPH");
  }
}

module.exports = BludgeonBrawl;
