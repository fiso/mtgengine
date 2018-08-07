"use strict";
const Constants = require ("../../../Constants");
const AtogBase = require("../setME4/Atog");

class Atog extends AtogBase {
  constructor (game) {
    super(game, "Atog", "Revised Edition", "3ED");
  }
}

module.exports = Atog;
