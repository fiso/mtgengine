"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingPack extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunting Pack", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = HuntingPack;
