"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArenaoftheAncients extends UnimplementedCard {
  constructor(game) {
    super(game, "Arena of the Ancients", "Chronicles", "CHR");
  }
}

module.exports = ArenaoftheAncients;
