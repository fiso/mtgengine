"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedBackWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbed-Back Wurm", "Mirage", "MIR");
  }
}

module.exports = BarbedBackWurm;
