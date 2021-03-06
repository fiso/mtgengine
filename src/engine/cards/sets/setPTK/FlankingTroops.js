"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlankingTroops extends UnimplementedCard {
  constructor (game) {
    super(game, "Flanking Troops", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = FlankingTroops;
