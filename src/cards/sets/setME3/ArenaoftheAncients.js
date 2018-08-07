"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArenaoftheAncients extends UnimplementedCard {
  constructor (game) {
    super(game, "Arena of the Ancients", "Masters Edition III", "ME3");
  }
}

module.exports = ArenaoftheAncients;
