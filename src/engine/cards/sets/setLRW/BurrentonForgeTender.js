"use strict";
const Constants = require ("../../../Constants");
const BurrentonForgeTenderBase = require("../setIMA/BurrentonForgeTender");

class BurrentonForgeTender extends BurrentonForgeTenderBase {
  constructor (game) {
    super(game, "Burrenton Forge-Tender", "Lorwyn", "LRW");
  }
}

module.exports = BurrentonForgeTender;
