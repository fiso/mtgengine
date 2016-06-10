"use strict";
const Constants = require ("../../../Constants");
const BurrentonForgeTenderBase = require("../setLRW/BurrentonForgeTender");

class BurrentonForgeTender extends BurrentonForgeTenderBase {
  constructor (game) {
    super(game, "Burrenton Forge-Tender", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = BurrentonForgeTender;
