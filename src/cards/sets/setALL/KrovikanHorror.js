"use strict";
const Constants = require ("../../../Constants");
const KrovikanHorrorBase = require("../setME2/KrovikanHorror");

class KrovikanHorror extends KrovikanHorrorBase {
  constructor (game) {
    super(game, "Krovikan Horror", "Alliances", "ALL");
  }
}

module.exports = KrovikanHorror;
