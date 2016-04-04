"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishSoultiller extends UnimplementedCard {
  constructor(game) {
    super(game, "Elvish Soultiller", "Legions", "LGN");
  }
}

module.exports = ElvishSoultiller;
