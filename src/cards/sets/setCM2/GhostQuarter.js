"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostQuarter extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghost Quarter", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = GhostQuarter;
