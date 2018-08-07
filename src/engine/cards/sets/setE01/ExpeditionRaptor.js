"use strict";
const Constants = require ("../../../Constants");
const ExpeditionRaptorBase = require("../setBBD/ExpeditionRaptor");

class ExpeditionRaptor extends ExpeditionRaptorBase {
  constructor (game) {
    super(game, "Expedition Raptor", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ExpeditionRaptor;
