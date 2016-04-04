"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkinInvasion extends Card {
  constructor(game) {
    super(game, "Skin Invasion", "Shadows over Innistrad", "SOI");
  }
}

module.exports = SkinInvasion;
