"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirulentSwipe extends UnimplementedCard {
  constructor (game) {
    super(game, "Virulent Swipe", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = VirulentSwipe;
