"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Confound extends UnimplementedCard {
  constructor (game) {
    super(game, "Confound", "Planeshift", "PLS");
  }
}

module.exports = Confound;
