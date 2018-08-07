"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reanimate extends UnimplementedCard {
  constructor (game) {
    super(game, "Reanimate", "Tempest Remastered", "TPR");
  }
}

module.exports = Reanimate;
