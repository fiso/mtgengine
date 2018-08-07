"use strict";
const Constants = require ("../../../Constants");
const ChronomatonBase = require("../setDDM/Chronomaton");

class Chronomaton extends ChronomatonBase {
  constructor (game) {
    super(game, "Chronomaton", "Magic 2013", "M13");
  }
}

module.exports = Chronomaton;
