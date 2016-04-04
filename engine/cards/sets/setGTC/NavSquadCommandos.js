"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NavSquadCommandos extends Card {
  constructor(game) {
    super(game, "Nav Squad Commandos", "Gatecrash", "GTC");
  }
}

module.exports = NavSquadCommandos;
