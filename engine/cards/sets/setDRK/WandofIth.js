"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WandofIth extends UnimplementedCard {
  constructor(game) {
    super(game, "Wand of Ith", "The Dark", "DRK");
  }
}

module.exports = WandofIth;
