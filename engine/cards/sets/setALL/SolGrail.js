"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SolGrail extends Card {
  constructor(game) {
    super(game, "Sol Grail", "Alliances", "ALL");
  }
}

module.exports = SolGrail;
