"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VirulentSwipe extends UnimplementedCard {
  constructor (game) {
    super(game, "Virulent Swipe", "Iconic Masters", "IMA");
  }
}

module.exports = VirulentSwipe;
