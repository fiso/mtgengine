"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BatteringWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Battering Wurm", "Guildpact", "GPT");
  }
}

module.exports = BatteringWurm;
