"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gavony extends UnimplementedCard {
  constructor (game) {
    super(game, "Gavony", "Planechase Anthology", "PCA");
  }
}

module.exports = Gavony;
