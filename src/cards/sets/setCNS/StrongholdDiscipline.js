"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongholdDiscipline extends UnimplementedCard {
  constructor (game) {
    super(game, "Stronghold Discipline", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = StrongholdDiscipline;
