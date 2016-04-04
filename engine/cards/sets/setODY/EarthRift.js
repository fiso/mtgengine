"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EarthRift extends Card {
  constructor(game) {
    super(game, "Earth Rift", "Odyssey", "ODY");
  }
}

module.exports = EarthRift;
