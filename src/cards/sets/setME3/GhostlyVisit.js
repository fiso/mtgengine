"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhostlyVisit extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostly Visit", "Masters Edition III", "ME3");
  }
}

module.exports = GhostlyVisit;
