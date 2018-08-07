"use strict";
const Constants = require ("../../../Constants");
const MasterTrinketeerBase = require("../setKLD/MasterTrinketeer");

class MasterTrinketeer extends MasterTrinketeerBase {
  constructor (game) {
    super(game, "Master Trinketeer", "Kaladesh Promos", "PKLD");
  }
}

module.exports = MasterTrinketeer;
