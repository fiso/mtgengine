"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BreakneckRider extends Card {
  constructor(game) {
    super(game, "Breakneck Rider", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BreakneckRider;
