"use strict";
const Constants = require ("../../../Constants");
const MyrBattlesphereBase = require("../setC18/MyrBattlesphere");

class MyrBattlesphere extends MyrBattlesphereBase {
  constructor (game) {
    super(game, "Myr Battlesphere", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MyrBattlesphere;
