"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExpeditionRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Expedition Raptor", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = ExpeditionRaptor;
