"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScoriaWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Scoria Wurm", "Tenth Edition", "10E");
  }
}

module.exports = ScoriaWurm;
