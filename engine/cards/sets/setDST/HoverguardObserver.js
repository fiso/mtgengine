"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HoverguardObserver extends Card {
  constructor(game) {
    super(game, "Hoverguard Observer", "Darksteel", "DST");
  }
}

module.exports = HoverguardObserver;
