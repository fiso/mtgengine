"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrimsThunder extends Card {
  constructor(game) {
    super(game, "Orim's Thunder", "Apocalypse", "APC");
  }
}

module.exports = OrimsThunder;
