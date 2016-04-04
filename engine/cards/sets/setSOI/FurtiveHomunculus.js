"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FurtiveHomunculus extends Card {
  constructor(game) {
    super(game, "Furtive Homunculus", "Shadows over Innistrad", "SOI");
  }
}

module.exports = FurtiveHomunculus;
