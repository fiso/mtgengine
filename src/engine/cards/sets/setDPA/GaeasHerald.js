"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GaeasHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaea's Herald", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = GaeasHerald;
