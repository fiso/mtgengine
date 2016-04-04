"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AshmouthBlade extends Card {
  constructor(game) {
    super(game, "Ashmouth Blade", "Shadows over Innistrad", "SOI");
  }
}

module.exports = AshmouthBlade;
