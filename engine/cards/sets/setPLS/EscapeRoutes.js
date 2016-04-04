"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EscapeRoutes extends Card {
  constructor(game) {
    super(game, "Escape Routes", "Planeshift", "PLS");
  }
}

module.exports = EscapeRoutes;
