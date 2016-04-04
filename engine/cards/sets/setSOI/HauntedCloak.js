"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HauntedCloak extends Card {
  constructor(game) {
    super(game, "Haunted Cloak", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HauntedCloak;
