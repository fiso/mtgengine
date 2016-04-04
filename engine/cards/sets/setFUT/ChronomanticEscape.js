"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChronomanticEscape extends Card {
  constructor(game) {
    super(game, "Chronomantic Escape", "Future Sight", "FUT");
  }
}

module.exports = ChronomanticEscape;
