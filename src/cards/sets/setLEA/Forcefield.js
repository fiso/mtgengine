"use strict";
const Constants = require ("../../../Constants");
const ForcefieldBase = require("../setCED/Forcefield");

class Forcefield extends ForcefieldBase {
  constructor(game) {
    super(game, "Forcefield", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Forcefield;
