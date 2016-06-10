"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SulfurousBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Sulfurous Blast", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SulfurousBlast;
