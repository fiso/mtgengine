"use strict";
const Constants = require ("../../../Constants");
const CertainDeathBase = require("../setW17/CertainDeath");

class CertainDeath extends CertainDeathBase {
  constructor (game) {
    super(game, "Certain Death", "Eldritch Moon", "EMN");
  }
}

module.exports = CertainDeath;
