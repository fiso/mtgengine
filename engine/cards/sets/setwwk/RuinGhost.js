"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RuinGhost extends Card {
  constructor(game) {
    super(game, "Ruin Ghost", "Worldwake", "WWK");
  }
}

module.exports = RuinGhost;
