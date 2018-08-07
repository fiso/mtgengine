"use strict";
const Constants = require ("../../../Constants");
const VirulentSwipeBase = require("../setIMA/VirulentSwipe");

class VirulentSwipe extends VirulentSwipeBase {
  constructor (game) {
    super(game, "Virulent Swipe", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = VirulentSwipe;
