"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlagueRatsBase = require("../setCED/PlagueRats.js");

class PlagueRats extends PlagueRatsBase {
  constructor(game) {
    super(game, "Plague Rats", "Limited Edition Alpha", "LEA");
  }
}

module.exports = PlagueRats;
