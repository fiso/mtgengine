"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeusofCalamityBase = require("../setDDL/DeusofCalamity.js");

class DeusofCalamity extends DeusofCalamityBase {
  constructor(game) {
    super(game, "Deus of Calamity", "Shadowmoor", "SHM");
  }
}

module.exports = DeusofCalamity;
