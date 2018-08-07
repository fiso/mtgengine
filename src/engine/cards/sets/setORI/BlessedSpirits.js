"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedSpirits extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessed Spirits", "Magic Origins", "ORI");
  }
}

module.exports = BlessedSpirits;
