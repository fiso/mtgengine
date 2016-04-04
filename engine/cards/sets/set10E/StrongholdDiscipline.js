"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StrongholdDisciplineBase = require("../setCNS/StrongholdDiscipline.js");

class StrongholdDiscipline extends StrongholdDisciplineBase {
  constructor(game) {
    super(game, "Stronghold Discipline", "Tenth Edition", "10E");
  }
}

module.exports = StrongholdDiscipline;
