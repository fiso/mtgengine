"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Novellamental extends UnimplementedCard {
  constructor (game) {
    super(game, "Novellamental", "Unstable", "UST");
  }
}

module.exports = Novellamental;
