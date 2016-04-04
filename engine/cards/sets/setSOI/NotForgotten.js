"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NotForgotten extends Card {
  constructor(game) {
    super(game, "Not Forgotten", "Shadows over Innistrad", "SOI");
  }
}

module.exports = NotForgotten;
