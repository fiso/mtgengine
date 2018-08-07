"use strict";
const Constants = require ("../../../Constants");
const DreadDefilerBase = require("../setOGW/DreadDefiler");

class DreadDefiler extends DreadDefilerBase {
  constructor (game) {
    super(game, "Dread Defiler", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = DreadDefiler;
