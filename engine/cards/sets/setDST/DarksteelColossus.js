"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarksteelColossus extends Card {
  constructor(game) {
    super(game, "Darksteel Colossus", "Darksteel", "DST");
  }
}

module.exports = DarksteelColossus;
