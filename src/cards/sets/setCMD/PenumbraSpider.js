"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PenumbraSpider extends UnimplementedCard {
  constructor(game) {
    super(game, "Penumbra Spider", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PenumbraSpider;
