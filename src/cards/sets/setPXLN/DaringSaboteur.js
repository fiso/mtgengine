"use strict";
const Constants = require ("../../../Constants");
const DaringSaboteurBase = require("../setXLN/DaringSaboteur");

class DaringSaboteur extends DaringSaboteurBase {
  constructor (game) {
    super(game, "Daring Saboteur", "Ixalan Promos", "PXLN");
  }
}

module.exports = DaringSaboteur;
