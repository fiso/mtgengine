"use strict";
const Constants = require ("../../../Constants");
const MiseBase = require("../setUNH/Mise");

class Mise extends MiseBase {
  constructor (game) {
    super(game, "Mise", "Arena League 2004", "PAL04");
  }
}

module.exports = Mise;
