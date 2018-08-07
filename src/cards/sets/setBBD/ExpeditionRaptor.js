"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExpeditionRaptor extends UnimplementedCard {
  constructor (game) {
    super(game, "Expedition Raptor", "Battlebond", "BBD");
  }
}

module.exports = ExpeditionRaptor;
