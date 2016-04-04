"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArtfulLooter extends Card {
  constructor(game) {
    super(game, "Artful Looter", "Unhinged", "UNH");
  }
}

module.exports = ArtfulLooter;
