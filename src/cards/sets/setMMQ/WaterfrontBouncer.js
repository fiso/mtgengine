"use strict";
const Constants = require ("../../../Constants");
const WaterfrontBouncerBase = require("../setVMA/WaterfrontBouncer");

class WaterfrontBouncer extends WaterfrontBouncerBase {
  constructor (game) {
    super(game, "Waterfront Bouncer", "Mercadian Masques", "MMQ");
  }
}

module.exports = WaterfrontBouncer;
