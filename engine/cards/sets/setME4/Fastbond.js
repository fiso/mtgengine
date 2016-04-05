"use strict";
const Constants = require ("../../../Constants");
const FastbondBase = require("../setCED/Fastbond");

class Fastbond extends FastbondBase {
  constructor(game) {
    super(game, "Fastbond", "Masters Edition IV", "ME4");
  }
}

module.exports = Fastbond;
