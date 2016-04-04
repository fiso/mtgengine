"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhipVine extends Card {
  constructor(game) {
    super(game, "Whip Vine", "Alliances", "ALL");
  }
}

module.exports = WhipVine;
