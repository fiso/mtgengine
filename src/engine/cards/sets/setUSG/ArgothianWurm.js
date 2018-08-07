"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgothianWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Argothian Wurm", "Urza's Saga", "USG");
  }
}

module.exports = ArgothianWurm;
