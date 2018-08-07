"use strict";
const Constants = require ("../../../Constants");
const PeaceofMindBase = require("../setEMN/PeaceofMind");

class PeaceofMind extends PeaceofMindBase {
  constructor (game) {
    super(game, "Peace of Mind", "Exodus", "EXO");
  }
}

module.exports = PeaceofMind;
