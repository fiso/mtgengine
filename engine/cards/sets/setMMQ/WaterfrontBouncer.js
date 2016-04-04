"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaterfrontBouncer extends Card {
  constructor(game) {
    super(game, "Waterfront Bouncer", "Mercadian Masques", "MMQ");
  }
}

module.exports = WaterfrontBouncer;
