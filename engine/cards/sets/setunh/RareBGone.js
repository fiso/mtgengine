"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RareBGone extends Card {
  constructor(game) {
    super(game, "Rare-B-Gone", "Unhinged", "UNH");
  }
}

module.exports = RareBGone;
