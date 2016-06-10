"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MetathranAerostat extends UnimplementedCard {
  constructor (game) {
    super(game, "Metathran Aerostat", "Invasion", "INV");
  }
}

module.exports = MetathranAerostat;
