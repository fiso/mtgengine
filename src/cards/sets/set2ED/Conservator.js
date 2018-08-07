"use strict";
const Constants = require ("../../../Constants");
const ConservatorBase = require("../set4ED/Conservator");

class Conservator extends ConservatorBase {
  constructor (game) {
    super(game, "Conservator", "Unlimited Edition", "2ED");
  }
}

module.exports = Conservator;
