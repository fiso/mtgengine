"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SegmentedWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Segmented Wurm", "Beatdown Box Set", "BTD");
  }
}

module.exports = SegmentedWurm;
