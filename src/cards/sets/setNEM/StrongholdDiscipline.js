"use strict";
const Constants = require ("../../../Constants");
const StrongholdDisciplineBase = require("../setCNS/StrongholdDiscipline");

class StrongholdDiscipline extends StrongholdDisciplineBase {
  constructor (game) {
    super(game, "Stronghold Discipline", "Nemesis", "NEM");
  }
}

module.exports = StrongholdDiscipline;
