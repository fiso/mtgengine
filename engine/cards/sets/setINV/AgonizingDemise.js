"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AgonizingDemiseBase = require("../setDDH/AgonizingDemise.js");

class AgonizingDemise extends AgonizingDemiseBase {
  constructor(game) {
    super(game, "Agonizing Demise", "Invasion", "INV");
  }
}

module.exports = AgonizingDemise;
