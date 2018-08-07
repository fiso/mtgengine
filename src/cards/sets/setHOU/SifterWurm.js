"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SifterWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Sifter Wurm", "Hour of Devastation", "HOU");
  }
}

module.exports = SifterWurm;
