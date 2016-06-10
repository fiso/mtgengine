"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Wurm", "Tempest", "TMP");
  }
}

module.exports = WildWurm;
