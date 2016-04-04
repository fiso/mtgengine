"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThunderingWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Thundering Wurm", "Portal", "POR");
  }
}

module.exports = ThunderingWurm;
