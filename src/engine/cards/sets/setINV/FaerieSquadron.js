"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FaerieSquadron extends UnimplementedCard {
  constructor (game) {
    super(game, "Faerie Squadron", "Invasion", "INV");
  }
}

module.exports = FaerieSquadron;
