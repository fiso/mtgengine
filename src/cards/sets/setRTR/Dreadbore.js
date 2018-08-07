"use strict";
const Constants = require ("../../../Constants");
const DreadboreBase = require("../setE01/Dreadbore");

class Dreadbore extends DreadboreBase {
  constructor (game) {
    super(game, "Dreadbore", "Return to Ravnica", "RTR");
  }
}

module.exports = Dreadbore;
