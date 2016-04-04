"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WitheringGaze extends UnimplementedCard {
  constructor(game) {
    super(game, "Withering Gaze", "Ninth Edition", "9ED");
  }
}

module.exports = WitheringGaze;
