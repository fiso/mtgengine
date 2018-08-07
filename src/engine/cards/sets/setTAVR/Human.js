"use strict";
const Constants = require ("../../../Constants");
const HumanBase = require("../setTEMN/Human");

class Human extends HumanBase {
  constructor (game) {
    super(game, "Human", "Avacyn Restored Tokens", "TAVR");
  }
}

module.exports = Human;
