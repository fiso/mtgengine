"use strict";
const Constants = require ("../../../Constants");
const StrongholdDisciplineBase = require("../setCNS/StrongholdDiscipline");

class StrongholdDiscipline extends StrongholdDisciplineBase {
  constructor (game) {
    super(game, "Stronghold Discipline", "Tenth Edition", "10E");
  }
}

module.exports = StrongholdDiscipline;
