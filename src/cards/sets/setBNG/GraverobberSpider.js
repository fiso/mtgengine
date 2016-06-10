"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraverobberSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Graverobber Spider", "Born of the Gods", "BNG");
  }
}

module.exports = GraverobberSpider;
