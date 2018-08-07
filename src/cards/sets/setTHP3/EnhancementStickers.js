"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnhancementStickers extends UnimplementedCard {
  constructor (game) {
    super(game, "Enhancement Stickers", "Journey into Nyx Hero's Path", "THP3");
  }
}

module.exports = EnhancementStickers;
