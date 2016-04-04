"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InsolentNeonate extends Card {
  constructor(game) {
    super(game, "Insolent Neonate", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InsolentNeonate;
