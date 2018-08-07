"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdDiscipline extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Discipline", "Conspiracy", "CNS");
  }
}

module.exports = StrongholdDiscipline;
