"use strict";
const Constants = require ("../../../Constants");
const OrcishLumberjackBase = require("../setVMA/OrcishLumberjack");

class OrcishLumberjack extends OrcishLumberjackBase {
  constructor (game) {
    super(game, "Orcish Lumberjack", "Magic Online Promos", "PRM");
  }
}

module.exports = OrcishLumberjack;
