"use strict";
const Constants = require ("../../../Constants");
const GolemBase = require("../setTRIX/Golem");

class Golem extends GolemBase {
  constructor (game) {
    super(game, "Golem", "Modern Masters 2017 Tokens", "TMM3");
  }
}

module.exports = Golem;
