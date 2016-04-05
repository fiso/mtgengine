"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThalakosScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Thalakos Scout", "Exodus", "EXO");
  }
}

module.exports = ThalakosScout;
