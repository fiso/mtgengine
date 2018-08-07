"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarrionWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Carrion Wurm", "Torment", "TOR");
  }
}

module.exports = CarrionWurm;
