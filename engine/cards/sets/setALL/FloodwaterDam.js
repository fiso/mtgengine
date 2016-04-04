"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FloodwaterDam extends Card {
  constructor(game) {
    super(game, "Floodwater Dam", "Alliances", "ALL");
  }
}

module.exports = FloodwaterDam;
