"use strict";
const Constants = require ("../../../Constants");
const GolemBase = require("../setTRIX/Golem");

class Golem extends GolemBase {
  constructor (game) {
    super(game, "Golem", "Judge Gift Cards 2013", "J13");
  }
}

module.exports = Golem;
