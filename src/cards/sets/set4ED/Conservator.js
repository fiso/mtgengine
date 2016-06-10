"use strict";
const Constants = require ("../../../Constants");
const ConservatorBase = require("../setCED/Conservator");

class Conservator extends ConservatorBase {
  constructor (game) {
    super(game, "Conservator", "Fourth Edition", "4ED");
  }
}

module.exports = Conservator;
