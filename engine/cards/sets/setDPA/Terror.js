"use strict";
const Constants = require ("../../../Constants");
const TerrorBase = require("../setATH/Terror");

class Terror extends TerrorBase {
  constructor(game) {
    super(game, "Terror", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Terror;
