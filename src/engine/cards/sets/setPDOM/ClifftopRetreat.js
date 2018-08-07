"use strict";
const Constants = require ("../../../Constants");
const ClifftopRetreatBase = require("../setDOM/ClifftopRetreat");

class ClifftopRetreat extends ClifftopRetreatBase {
  constructor (game) {
    super(game, "Clifftop Retreat", "Dominaria Promos", "PDOM");
  }
}

module.exports = ClifftopRetreat;
