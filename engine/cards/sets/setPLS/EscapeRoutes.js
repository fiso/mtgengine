"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EscapeRoutes extends UnimplementedCard {
  constructor(game) {
    super(game, "Escape Routes", "Planeshift", "PLS");
  }
}

module.exports = EscapeRoutes;
