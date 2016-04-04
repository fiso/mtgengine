"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SlagwurmArmor extends Card {
  constructor(game) {
    super(game, "Slagwurm Armor", "Mirrodin", "MRD");
  }
}

module.exports = SlagwurmArmor;
