"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChromeMox extends Card {
  constructor(game) {
    super(game, "Chrome Mox", "Grand Prix", "pGPX");
  }
}

module.exports = ChromeMox;
