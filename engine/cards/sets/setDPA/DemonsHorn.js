"use strict";
const Constants = require ("../../../Constants");
const DemonsHornBase = require("../setDST/DemonsHorn");

class DemonsHorn extends DemonsHornBase {
  constructor(game) {
    super(game, "Demon's Horn", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = DemonsHorn;
