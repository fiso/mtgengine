"use strict";
const Constants = require ("../../../Constants");
const AtogBase = require("../setME4/Atog");

class Atog extends AtogBase {
  constructor (game) {
    super(game, "Atog", "Fifth Edition", "5ED");
  }
}

module.exports = Atog;
