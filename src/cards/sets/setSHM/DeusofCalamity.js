"use strict";
const Constants = require ("../../../Constants");
const DeusofCalamityBase = require("../setDDL/DeusofCalamity");

class DeusofCalamity extends DeusofCalamityBase {
  constructor(game) {
    super(game, "Deus of Calamity", "Shadowmoor", "SHM");
  }
}

module.exports = DeusofCalamity;
