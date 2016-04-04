"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TotheSlaughter extends Card {
  constructor(game) {
    super(game, "To the Slaughter", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TotheSlaughter;
