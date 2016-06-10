"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SageofAncientLore extends UnimplementedCard {
  constructor (game) {
    super(game, "Sage of Ancient Lore", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SageofAncientLore;
