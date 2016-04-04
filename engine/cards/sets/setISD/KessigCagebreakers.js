"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KessigCagebreakersBase = require("../setC15/KessigCagebreakers.js");

class KessigCagebreakers extends KessigCagebreakersBase {
  constructor(game) {
    super(game, "Kessig Cagebreakers", "Innistrad", "ISD");
  }
}

module.exports = KessigCagebreakers;
