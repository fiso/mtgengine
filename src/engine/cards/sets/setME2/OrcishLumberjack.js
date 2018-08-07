"use strict";
const Constants = require ("../../../Constants");
const OrcishLumberjackBase = require("../setVMA/OrcishLumberjack");

class OrcishLumberjack extends OrcishLumberjackBase {
  constructor (game) {
    super(game, "Orcish Lumberjack", "Masters Edition II", "ME2");
  }
}

module.exports = OrcishLumberjack;
