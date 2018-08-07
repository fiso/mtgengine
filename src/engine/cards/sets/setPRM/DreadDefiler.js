"use strict";
const Constants = require ("../../../Constants");
const DreadDefilerBase = require("../setOGW/DreadDefiler");

class DreadDefiler extends DreadDefilerBase {
  constructor (game) {
    super(game, "Dread Defiler", "Magic Online Promos", "PRM");
  }
}

module.exports = DreadDefiler;
