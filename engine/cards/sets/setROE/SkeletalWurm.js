"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkeletalWurm extends Card {
  constructor(game) {
    super(game, "Skeletal Wurm", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = SkeletalWurm;
