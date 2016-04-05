"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostQuarter extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghost Quarter", "Commander 2014", "C14");
  }
}

module.exports = GhostQuarter;
