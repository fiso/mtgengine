"use strict";
const Constants = require ("../../../Constants");
const EldraziMimicBase = require("../setOGW/EldraziMimic");

class EldraziMimic extends EldraziMimicBase {
  constructor (game) {
    super(game, "Eldrazi Mimic", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = EldraziMimic;
