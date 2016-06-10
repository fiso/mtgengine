"use strict";
const Constants = require ("../../../Constants");
const MyrBattlesphereBase = require("../setC13/MyrBattlesphere");

class MyrBattlesphere extends MyrBattlesphereBase {
  constructor (game) {
    super(game, "Myr Battlesphere", "Commander 2014", "C14");
  }
}

module.exports = MyrBattlesphere;
