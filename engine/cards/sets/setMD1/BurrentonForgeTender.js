"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BurrentonForgeTenderBase = require("../setLRW/BurrentonForgeTender.js");

class BurrentonForgeTender extends BurrentonForgeTenderBase {
  constructor(game) {
    super(game, "Burrenton Forge-Tender", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = BurrentonForgeTender;
