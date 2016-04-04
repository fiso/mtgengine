"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishCannoneers extends Card {
  constructor(game) {
    super(game, "Orcish Cannoneers", "Deckmasters", "DKM");
  }
}

module.exports = OrcishCannoneers;
