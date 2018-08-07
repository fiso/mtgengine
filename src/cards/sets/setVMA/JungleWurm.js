"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JungleWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Jungle Wurm", "Vintage Masters", "VMA");
  }
}

module.exports = JungleWurm;
