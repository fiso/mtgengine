"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterfrontBouncer extends UnimplementedCard {
  constructor (game) {
    super(game, "Waterfront Bouncer", "Vintage Masters", "VMA");
  }
}

module.exports = WaterfrontBouncer;
