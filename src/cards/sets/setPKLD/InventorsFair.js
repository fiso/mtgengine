"use strict";
const Constants = require ("../../../Constants");
const InventorsFairBase = require("../setKLD/InventorsFair");

class InventorsFair extends InventorsFairBase {
  constructor (game) {
    super(game, "Inventors' Fair", "Kaladesh Promos", "PKLD");
  }
}

module.exports = InventorsFair;
