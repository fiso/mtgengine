"use strict";
const Constants = require ("../../../Constants");
const ForcefieldBase = require("../setCED/Forcefield");

class Forcefield extends ForcefieldBase {
  constructor (game) {
    super(game, "Forcefield", "Masters Edition", "MED");
  }
}

module.exports = Forcefield;
