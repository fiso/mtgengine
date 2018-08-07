"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThresherLizard extends UnimplementedCard {
  constructor (game) {
    super(game, "Thresher Lizard", "Masters 25", "A25");
  }
}

module.exports = ThresherLizard;
