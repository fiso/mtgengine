"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Singe extends UnimplementedCard {
  constructor(game) {
    super(game, "Singe", "Planeshift", "PLS");
  }
}

module.exports = Singe;
