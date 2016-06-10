"use strict";
const Constants = require ("../../../Constants");
const ContestedCliffsBase = require("../setC13/ContestedCliffs");

class ContestedCliffs extends ContestedCliffsBase {
  constructor (game) {
    super(game, "Contested Cliffs", "Onslaught", "ONS");
  }
}

module.exports = ContestedCliffs;
