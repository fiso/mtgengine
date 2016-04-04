"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MesmericSliver extends Card {
  constructor(game) {
    super(game, "Mesmeric Sliver", "Future Sight", "FUT");
  }
}

module.exports = MesmericSliver;
