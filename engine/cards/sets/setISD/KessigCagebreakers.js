"use strict";
const Constants = require ("../../../Constants");
const KessigCagebreakersBase = require("../setC15/KessigCagebreakers");

class KessigCagebreakers extends KessigCagebreakersBase {
  constructor(game) {
    super(game, "Kessig Cagebreakers", "Innistrad", "ISD");
  }
}

module.exports = KessigCagebreakers;
