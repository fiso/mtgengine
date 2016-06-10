"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkeletalWurm extends UnimplementedCard {
  constructor (game) {
    super(game, "Skeletal Wurm", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SkeletalWurm;
