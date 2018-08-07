"use strict";
const Constants = require ("../../../Constants");
const EldraziObligatorBase = require("../setOGW/EldraziObligator");

class EldraziObligator extends EldraziObligatorBase {
  constructor (game) {
    super(game, "Eldrazi Obligator", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = EldraziObligator;
