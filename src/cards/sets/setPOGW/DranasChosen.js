"use strict";
const Constants = require ("../../../Constants");
const DranasChosenBase = require("../setOGW/DranasChosen");

class DranasChosen extends DranasChosenBase {
  constructor (game) {
    super(game, "Drana's Chosen", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = DranasChosen;
