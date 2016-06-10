"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaspLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Wasp Lancer", "Shadowmoor", "SHM");
  }
}

module.exports = WaspLancer;
