"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WelcometotheFold extends Card {
  constructor(game) {
    super(game, "Welcome to the Fold", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WelcometotheFold;
