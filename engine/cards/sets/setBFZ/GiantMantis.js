"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantMantis extends UnimplementedCard {
  constructor(game) {
    super(game, "Giant Mantis", "Battle for Zendikar", "BFZ");
  }
}

module.exports = GiantMantis;
