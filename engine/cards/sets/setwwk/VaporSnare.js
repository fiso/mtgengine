"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VaporSnare extends Card {
  constructor(game) {
    super(game, "Vapor Snare", "Worldwake", "WWK");
  }
}

module.exports = VaporSnare;
