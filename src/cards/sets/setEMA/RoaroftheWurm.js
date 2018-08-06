"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoaroftheWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Roar of the Wurm", "Eternal Masters", "EMA");
  }
}

module.exports = RoaroftheWurm;
