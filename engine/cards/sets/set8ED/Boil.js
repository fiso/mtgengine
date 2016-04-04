"use strict";
const Constants = require ("../../../Constants");
const BoilBase = require("../set6ED/Boil");

class Boil extends BoilBase {
  constructor(game) {
    super(game, "Boil", "Eighth Edition", "8ED");
  }
}

module.exports = Boil;
