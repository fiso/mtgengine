"use strict";
const Constants = require ("../../../Constants");
const KessigCagebreakersBase = require("../setCMA/KessigCagebreakers");

class KessigCagebreakers extends KessigCagebreakersBase {
  constructor (game) {
    super(game, "Kessig Cagebreakers", "Commander 2015", "C15");
  }
}

module.exports = KessigCagebreakers;
