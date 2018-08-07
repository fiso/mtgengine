"use strict";
const Constants = require ("../../../Constants");
const BoilBase = require("../setMP2/Boil");

class Boil extends BoilBase {
  constructor (game) {
    super(game, "Boil", "Seventh Edition", "7ED");
  }
}

module.exports = Boil;
