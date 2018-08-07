"use strict";
const Constants = require ("../../../Constants");
const HordeofNotionsBase = require("../setMM2/HordeofNotions");

class HordeofNotions extends HordeofNotionsBase {
  constructor (game) {
    super(game, "Horde of Notions", "Lorwyn", "LRW");
  }
}

module.exports = HordeofNotions;
