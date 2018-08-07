"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RakdosRingleader extends UnimplementedCard {
  constructor (game) {
    super(game, "Rakdos Ringleader", "Return to Ravnica", "RTR");
  }
}

module.exports = RakdosRingleader;
