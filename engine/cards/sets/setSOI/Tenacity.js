"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Tenacity extends Card {
  constructor(game) {
    super(game, "Tenacity", "Shadows over Innistrad", "SOI");
  }
}

module.exports = Tenacity;
