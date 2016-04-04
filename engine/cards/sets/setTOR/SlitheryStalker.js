"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlitheryStalker extends Card {
  constructor(game) {
    super(game, "Slithery Stalker", "Torment", "TOR");
  }
}

module.exports = SlitheryStalker;
