"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaterfrontBouncer extends UnimplementedCard {
  constructor (game) {
    super(game, "Waterfront Bouncer", "Mercadian Masques", "MMQ");
  }
}

module.exports = WaterfrontBouncer;
