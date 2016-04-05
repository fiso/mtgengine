"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaidingParty extends UnimplementedCard {
  constructor(game) {
    super(game, "Raiding Party", "Fallen Empires", "FEM");
  }
}

module.exports = RaidingParty;
