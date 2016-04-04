"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaggingThoughts extends Card {
  constructor(game) {
    super(game, "Nagging Thoughts", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NaggingThoughts;
