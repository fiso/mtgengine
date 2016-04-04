"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlagwurmArmor extends UnimplementedCard {
  constructor(game) {
    super(game, "Slagwurm Armor", "Mirrodin", "MRD");
  }
}

module.exports = SlagwurmArmor;
