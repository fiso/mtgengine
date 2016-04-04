"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StrongholdDisciplineBase = require("../setCNS/StrongholdDiscipline.js");

class StrongholdDiscipline extends StrongholdDisciplineBase {
  constructor(game) {
    super(game, "Stronghold Discipline", "Nemesis", "NMS");
  }
}

module.exports = StrongholdDiscipline;
