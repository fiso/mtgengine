"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThalakosScout extends UnimplementedCard {
  constructor (game) {
    super(game, "Thalakos Scout", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosScout;
