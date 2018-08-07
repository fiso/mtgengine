"use strict";
const Constants = require ("../../../Constants");
const DarkpactBase = require("../setSUM/Darkpact");

class Darkpact extends DarkpactBase {
  constructor (game) {
    super(game, "Darkpact", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Darkpact;
