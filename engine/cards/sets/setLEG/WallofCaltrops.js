"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WallofCaltrops extends Card {
  constructor(game) {
    super(game, "Wall of Caltrops", "Legends", "LEG");
  }
}

module.exports = WallofCaltrops;
