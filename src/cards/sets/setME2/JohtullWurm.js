"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JohtullWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Johtull Wurm", "Masters Edition II", "ME2");
  }
}

module.exports = JohtullWurm;
