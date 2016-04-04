"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GhostlyVisit extends Card {
  constructor(game) {
    super(game, "Ghostly Visit", "Masters Edition III", "ME3");
  }
}

module.exports = GhostlyVisit;
