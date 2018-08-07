"use strict";
const Constants = require ("../../../Constants");
const MyrBattlesphereBase = require("../setC18/MyrBattlesphere");

class MyrBattlesphere extends MyrBattlesphereBase {
  constructor (game) {
    super(game, "Myr Battlesphere", "Commander 2016", "C16");
  }
}

module.exports = MyrBattlesphere;
