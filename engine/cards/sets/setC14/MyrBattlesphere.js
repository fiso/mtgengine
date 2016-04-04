"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MyrBattlesphereBase = require("../setC13/MyrBattlesphere.js");

class MyrBattlesphere extends MyrBattlesphereBase {
  constructor(game) {
    super(game, "Myr Battlesphere", "Commander 2014", "C14");
  }
}

module.exports = MyrBattlesphere;
