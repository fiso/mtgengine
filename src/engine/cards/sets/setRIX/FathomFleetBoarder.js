"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FathomFleetBoarder extends UnimplementedCard {
  constructor (game) {
    super(game, "Fathom Fleet Boarder", "Rivals of Ixalan", "RIX");
  }
}

module.exports = FathomFleetBoarder;
