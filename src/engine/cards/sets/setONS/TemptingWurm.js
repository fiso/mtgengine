"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemptingWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Tempting Wurm", "Onslaught", "ONS");
  }
}

module.exports = TemptingWurm;
