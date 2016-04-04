"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Accelerate extends UnimplementedCard {
  constructor(game) {
    super(game, "Accelerate", "Torment", "TOR");
  }
}

module.exports = Accelerate;
