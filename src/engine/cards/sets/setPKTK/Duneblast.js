"use strict";
const Constants = require ("../../../Constants");
const DuneblastBase = require("../setCM2/Duneblast");

class Duneblast extends DuneblastBase {
  constructor (game) {
    super(game, "Duneblast", "Khans of Tarkir Promos", "PKTK");
  }
}

module.exports = Duneblast;
