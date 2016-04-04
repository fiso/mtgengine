"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VirulentSwipe extends Card {
  constructor(game) {
    super(game, "Virulent Swipe", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = VirulentSwipe;
