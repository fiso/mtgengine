"use strict";
const Constants = require ("../../../Constants");
const AgonizingDemiseBase = require("../setDDH/AgonizingDemise");

class AgonizingDemise extends AgonizingDemiseBase {
  constructor (game) {
    super(game, "Agonizing Demise", "Invasion", "INV");
  }
}

module.exports = AgonizingDemise;
