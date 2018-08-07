"use strict";
const Constants = require ("../../../Constants");
const SlagwurmArmorBase = require("../setTD2/SlagwurmArmor");

class SlagwurmArmor extends SlagwurmArmorBase {
  constructor (game) {
    super(game, "Slagwurm Armor", "Mirrodin", "MRD");
  }
}

module.exports = SlagwurmArmor;
