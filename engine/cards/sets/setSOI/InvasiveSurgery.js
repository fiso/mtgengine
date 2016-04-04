"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InvasiveSurgery extends Card {
  constructor(game) {
    super(game, "Invasive Surgery", "Shadows over Innistrad", "SOI");
  }
}

module.exports = InvasiveSurgery;
