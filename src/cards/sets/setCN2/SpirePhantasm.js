"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpirePhantasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Spire Phantasm", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = SpirePhantasm;
