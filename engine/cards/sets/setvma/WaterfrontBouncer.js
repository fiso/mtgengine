"use strict";
const Constants = require ("../../../Constants");
const WaterfrontBouncerBase = require("../setMMQ/WaterfrontBouncer");

class WaterfrontBouncer extends WaterfrontBouncerBase {
  constructor(game) {
    super(game, "Waterfront Bouncer", "Vintage Masters", "VMA");
  }
}

module.exports = WaterfrontBouncer;
