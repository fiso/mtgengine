"use strict";
const Constants = require ("../../../Constants");
const HumanBase = require("../setTEMN/Human");

class Human extends HumanBase {
  constructor (game) {
    super(game, "Human", "Dark Ascension Tokens", "TDKA");
  }
}

module.exports = Human;
