"use strict";
const Constants = require ("../../../Constants");
const DarkpactBase = require("../setCED/Darkpact");

class Darkpact extends DarkpactBase {
  constructor(game) {
    super(game, "Darkpact", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Darkpact;
