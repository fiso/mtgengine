"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaSnidd extends UnimplementedCard {
  constructor(game) {
    super(game, "Sea Snidd", "Planeshift", "PLS");
  }
}

module.exports = SeaSnidd;
