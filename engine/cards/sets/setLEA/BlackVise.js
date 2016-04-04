"use strict";
const Constants = require ("../../../Constants");
const BlackViseBase = require("../setCED/BlackVise");

class BlackVise extends BlackViseBase {
  constructor(game) {
    super(game, "Black Vise", "Limited Edition Alpha", "LEA");
  }
}

module.exports = BlackVise;
