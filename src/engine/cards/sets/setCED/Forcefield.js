"use strict";
const Constants = require ("../../../Constants");
const ForcefieldBase = require("../setMED/Forcefield");

class Forcefield extends ForcefieldBase {
  constructor (game) {
    super(game, "Forcefield", "Collectors’ Edition", "CED");
  }
}

module.exports = Forcefield;
