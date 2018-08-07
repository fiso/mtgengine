"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TargetMinotaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Target Minotaur", "Unstable", "UST");
  }
}

module.exports = TargetMinotaur;
