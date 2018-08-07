"use strict";
const Constants = require ("../../../Constants");
const WaterfrontBouncerBase = require("../setVMA/WaterfrontBouncer");

class WaterfrontBouncer extends WaterfrontBouncerBase {
  constructor (game) {
    super(game, "Waterfront Bouncer", "World Championship Decks 2001", "WC01");
  }
}

module.exports = WaterfrontBouncer;
