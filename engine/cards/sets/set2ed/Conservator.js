"use strict";
const Constants = require ("../../../Constants");
const ConservatorBase = require("../setCED/Conservator");

class Conservator extends ConservatorBase {
  constructor(game) {
    super(game, "Conservator", "Unlimited Edition", "2ED");
  }
}

module.exports = Conservator;
