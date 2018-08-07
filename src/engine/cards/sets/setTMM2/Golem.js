"use strict";
const Constants = require ("../../../Constants");
const GolemBase = require("../setTRIX/Golem");

class Golem extends GolemBase {
  constructor (game) {
    super(game, "Golem", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Golem;
