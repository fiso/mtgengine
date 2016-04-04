"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootOut extends Card {
  constructor(game) {
    super(game, "Root Out", "Shadows over Innistrad", "SOI");
  }
}

module.exports = RootOut;
