"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PostmortemLunge extends Card {
  constructor(game) {
    super(game, "Postmortem Lunge", "New Phyrexia", "NPH");
  }
}

module.exports = PostmortemLunge;
