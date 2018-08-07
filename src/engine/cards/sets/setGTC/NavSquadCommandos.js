"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NavSquadCommandos extends UnimplementedCard {
  constructor (game) {
    super(game, "Nav Squad Commandos", "Gatecrash", "GTC");
  }
}

module.exports = NavSquadCommandos;
