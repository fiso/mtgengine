"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WitheringGaze extends Card {
  constructor(game) {
    super(game, "Withering Gaze", "Ninth Edition", "9ED");
  }
}

module.exports = WitheringGaze;
