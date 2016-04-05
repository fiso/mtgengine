"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JohtullWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Johtull Wurm", "Fifth Edition", "5ED");
  }
}

module.exports = JohtullWurm;
