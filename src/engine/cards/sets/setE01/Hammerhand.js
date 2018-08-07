"use strict";
const Constants = require ("../../../Constants");
const HammerhandBase = require("../setIMA/Hammerhand");

class Hammerhand extends HammerhandBase {
  constructor (game) {
    super(game, "Hammerhand", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Hammerhand;
