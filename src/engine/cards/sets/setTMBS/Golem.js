"use strict";
const Constants = require ("../../../Constants");
const GolemBase = require("../setTRIX/Golem");

class Golem extends GolemBase {
  constructor (game) {
    super(game, "Golem", "Mirrodin Besieged Tokens", "TMBS");
  }
}

module.exports = Golem;
