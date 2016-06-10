"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosKeyrune extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakdos Keyrune", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdosKeyrune;
