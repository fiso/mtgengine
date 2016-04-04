"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BygoneBishop extends Card {
  constructor(game) {
    super(game, "Bygone Bishop", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BygoneBishop;
