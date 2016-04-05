"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BroodhunterWurm extends UnimplementedCard {
  constructor(game) {
    super(game, "Broodhunter Wurm", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BroodhunterWurm;
