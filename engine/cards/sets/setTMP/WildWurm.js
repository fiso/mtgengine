"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildWurm extends Card {
  constructor(game) {
    super(game, "Wild Wurm", "Tempest", "TMP");
  }
}

module.exports = WildWurm;
