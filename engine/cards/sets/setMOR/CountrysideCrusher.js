"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CountrysideCrusherBase = require("../setMMA/CountrysideCrusher.js");

class CountrysideCrusher extends CountrysideCrusherBase {
  constructor(game) {
    super(game, "Countryside Crusher", "Morningtide", "MOR");
  }
}

module.exports = CountrysideCrusher;
