"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OpentheArmory extends Card {
  constructor(game) {
    super(game, "Open the Armory", "Shadows over Innistrad", "SOI");
  }
}

module.exports = OpentheArmory;
