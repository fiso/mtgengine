"use strict";
const Constants = require ("../../../Constants");
const DuneblastBase = require("../setCM2/Duneblast");

class Duneblast extends DuneblastBase {
  constructor (game) {
    super(game, "Duneblast", "Commander 2016", "C16");
  }
}

module.exports = Duneblast;
