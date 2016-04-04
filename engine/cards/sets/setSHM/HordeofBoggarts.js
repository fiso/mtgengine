"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HordeofBoggarts extends Card {
  constructor(game) {
    super(game, "Horde of Boggarts", "Shadowmoor", "SHM");
  }
}

module.exports = HordeofBoggarts;
