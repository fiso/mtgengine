"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GaeasHerald extends Card {
  constructor(game) {
    super(game, "Gaea's Herald", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = GaeasHerald;
