"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OutpostSiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Outpost Siege", "Fate Reforged", "FRF");
  }
}

module.exports = OutpostSiege;
