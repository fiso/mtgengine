"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoilmagesTrick extends Card {
  constructor(game) {
    super(game, "Roilmage's Trick", "Battle for Zendikar", "BFZ");
  }
}

module.exports = RoilmagesTrick;
