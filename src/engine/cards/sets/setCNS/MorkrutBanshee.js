"use strict";
const Constants = require ("../../../Constants");
const MorkrutBansheeBase = require("../setC14/MorkrutBanshee");

class MorkrutBanshee extends MorkrutBansheeBase {
  constructor (game) {
    super(game, "Morkrut Banshee", "Conspiracy", "CNS");
  }
}

module.exports = MorkrutBanshee;
