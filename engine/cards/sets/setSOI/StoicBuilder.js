"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoicBuilder extends Card {
  constructor(game) {
    super(game, "Stoic Builder", "Shadows over Innistrad", "SOI");
  }
}

module.exports = StoicBuilder;
