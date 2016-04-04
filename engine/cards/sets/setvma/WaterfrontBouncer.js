"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaterfrontBouncerBase = require("../setMMQ/WaterfrontBouncer.js");

class WaterfrontBouncer extends WaterfrontBouncerBase {
  constructor(game) {
    super(game, "Waterfront Bouncer", "Vintage Masters", "VMA");
  }
}

module.exports = WaterfrontBouncer;
