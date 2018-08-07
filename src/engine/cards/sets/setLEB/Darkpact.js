"use strict";
const Constants = require ("../../../Constants");
const DarkpactBase = require("../setSUM/Darkpact");

class Darkpact extends DarkpactBase {
  constructor (game) {
    super(game, "Darkpact", "Limited Edition Beta", "LEB");
  }
}

module.exports = Darkpact;
