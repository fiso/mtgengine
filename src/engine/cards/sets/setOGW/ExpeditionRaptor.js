"use strict";
const Constants = require ("../../../Constants");
const ExpeditionRaptorBase = require("../setBBD/ExpeditionRaptor");

class ExpeditionRaptor extends ExpeditionRaptorBase {
  constructor (game) {
    super(game, "Expedition Raptor", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ExpeditionRaptor;
