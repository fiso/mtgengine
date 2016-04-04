"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PiliPala extends Card {
  constructor(game) {
    super(game, "Pili-Pala", "Shadowmoor", "SHM");
  }
}

module.exports = PiliPala;
