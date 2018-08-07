"use strict";
const Constants = require ("../../../Constants");
const GolemBase = require("../setTRIX/Golem");

class Golem extends GolemBase {
  constructor (game) {
    super(game, "Golem", "Scars of Mirrodin Tokens", "TSOM");
  }
}

module.exports = Golem;
