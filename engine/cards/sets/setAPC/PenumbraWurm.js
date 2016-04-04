"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PenumbraWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Penumbra Wurm", "Apocalypse", "APC");
  }
}

module.exports = PenumbraWurm;
