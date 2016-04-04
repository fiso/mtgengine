"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PerimeterCaptain extends Card {
  constructor(game) {
    super(game, "Perimeter Captain", "Worldwake", "WWK");
  }
}

module.exports = PerimeterCaptain;
