"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ContestedCliffsBase = require("../setC13/ContestedCliffs.js");

class ContestedCliffs extends ContestedCliffsBase {
  constructor(game) {
    super(game, "Contested Cliffs", "Onslaught", "ONS");
  }
}

module.exports = ContestedCliffs;
