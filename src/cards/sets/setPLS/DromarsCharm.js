"use strict";
const Constants = require ("../../../Constants");
const DromarsCharmBase = require("../setC13/DromarsCharm");

class DromarsCharm extends DromarsCharmBase {
  constructor (game) {
    super(game, "Dromar's Charm", "Planeshift", "PLS");
  }
}

module.exports = DromarsCharm;
