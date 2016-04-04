"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MetathranAerostat extends Card {
  constructor(game) {
    super(game, "Metathran Aerostat", "Invasion", "INV");
  }
}

module.exports = MetathranAerostat;
