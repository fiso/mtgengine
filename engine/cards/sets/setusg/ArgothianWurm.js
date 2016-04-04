"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArgothianWurm extends Card {
  constructor(game) {
    super(game, "Argothian Wurm", "Urza's Saga", "USG");
  }
}

module.exports = ArgothianWurm;
