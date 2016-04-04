"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DoomBlade extends Card {
  constructor(game) {
    super(game, "Doom Blade", "Magic 2010", "M10");
  }
}

module.exports = DoomBlade;
