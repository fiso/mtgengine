"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExpeditionRaptor extends Card {
  constructor(game) {
    super(game, "Expedition Raptor", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ExpeditionRaptor;
