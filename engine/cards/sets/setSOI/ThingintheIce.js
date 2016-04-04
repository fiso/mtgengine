"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThingintheIce extends Card {
  constructor(game) {
    super(game, "Thing in the Ice", "Shadows over Innistrad", "SOI");
  }
}

module.exports = ThingintheIce;
