"use strict";
const Constants = require ("../../../Constants");
const ConservatorBase = require("../set4ED/Conservator");

class Conservator extends ConservatorBase {
  constructor (game) {
    super(game, "Conservator", "Limited Edition Beta", "LEB");
  }
}

module.exports = Conservator;
