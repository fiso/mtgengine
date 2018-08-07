"use strict";
const Constants = require ("../../../Constants");
const DenProtectorBase = require("../setC16/DenProtector");

class DenProtector extends DenProtectorBase {
  constructor (game) {
    super(game, "Den Protector", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = DenProtector;
