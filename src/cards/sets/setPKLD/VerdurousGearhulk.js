"use strict";
const Constants = require ("../../../Constants");
const VerdurousGearhulkBase = require("../setKLD/VerdurousGearhulk");

class VerdurousGearhulk extends VerdurousGearhulkBase {
  constructor (game) {
    super(game, "Verdurous Gearhulk", "Kaladesh Promos", "PKLD");
  }
}

module.exports = VerdurousGearhulk;
