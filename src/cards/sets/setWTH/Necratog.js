"use strict";
const Constants = require ("../../../Constants");
const NecratogBase = require("../setWC97/Necratog");

class Necratog extends NecratogBase {
  constructor (game) {
    super(game, "Necratog", "Weatherlight", "WTH");
  }
}

module.exports = Necratog;
