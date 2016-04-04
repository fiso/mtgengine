"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AngelofDeliverance extends Card {
  constructor(game) {
    super(game, "Angel of Deliverance", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AngelofDeliverance;
