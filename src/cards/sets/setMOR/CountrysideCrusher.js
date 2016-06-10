"use strict";
const Constants = require ("../../../Constants");
const CountrysideCrusherBase = require("../setMMA/CountrysideCrusher");

class CountrysideCrusher extends CountrysideCrusherBase {
  constructor (game) {
    super(game, "Countryside Crusher", "Morningtide", "MOR");
  }
}

module.exports = CountrysideCrusher;
