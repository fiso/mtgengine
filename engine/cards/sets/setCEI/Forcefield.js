"use strict";
const Constants = require ("../../../Constants");
const ForcefieldBase = require("../setCED/Forcefield");

class Forcefield extends ForcefieldBase {
  constructor(game) {
    super(game, "Forcefield", "International Collector's Edition", "CEI");
  }
}

module.exports = Forcefield;
