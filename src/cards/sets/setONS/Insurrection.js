"use strict";
const Constants = require ("../../../Constants");
const InsurrectionBase = require("../setCMD/Insurrection");

class Insurrection extends InsurrectionBase {
  constructor (game) {
    super(game, "Insurrection", "Onslaught", "ONS");
  }
}

module.exports = Insurrection;
