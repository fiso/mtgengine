"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PackGuardian extends Card {
  constructor(game) {
    super(game, "Pack Guardian", "Shadows over Innistrad", "SOI");
  }
}

module.exports = PackGuardian;
