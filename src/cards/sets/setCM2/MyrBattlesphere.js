"use strict";
const Constants = require ("../../../Constants");
const MyrBattlesphereBase = require("../setC18/MyrBattlesphere");

class MyrBattlesphere extends MyrBattlesphereBase {
  constructor (game) {
    super(game, "Myr Battlesphere", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MyrBattlesphere;
