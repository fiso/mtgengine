"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoldeviSteamBeast extends UnimplementedCard {
  constructor(game) {
    super(game, "Soldevi Steam Beast", "Alliances", "ALL");
  }
}

module.exports = SoldeviSteamBeast;
