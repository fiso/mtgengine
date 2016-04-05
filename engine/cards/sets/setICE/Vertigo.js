"use strict";
const Constants = require ("../../../Constants");
const VertigoBase = require("../set6ED/Vertigo");

class Vertigo extends VertigoBase {
  constructor(game) {
    super(game, "Vertigo", "Ice Age", "ICE");
  }
}

module.exports = Vertigo;
