"use strict";
const Constants = require ("../../../Constants");
const CruelRealityBase = require("../setAKH/CruelReality");

class CruelReality extends CruelRealityBase {
  constructor (game) {
    super(game, "Cruel Reality", "Amonkhet Promos", "PAKH");
  }
}

module.exports = CruelReality;
