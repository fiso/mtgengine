"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WolfhuntersQuiver extends Card {
  constructor(game) {
    super(game, "Wolfhunter's Quiver", "Dark Ascension", "DKA");
  }
}

module.exports = WolfhuntersQuiver;
