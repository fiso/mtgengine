"use strict";
const Constants = require ("../../../Constants");
const StoneforgeMasterworkBase = require("../setOGW/StoneforgeMasterwork");

class StoneforgeMasterwork extends StoneforgeMasterworkBase {
  constructor (game) {
    super(game, "Stoneforge Masterwork", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = StoneforgeMasterwork;
