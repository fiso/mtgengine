"use strict";
const Constants = require ("../../../Constants");
const AsForetoldBase = require("../setAKH/AsForetold");

class AsForetold extends AsForetoldBase {
  constructor (game) {
    super(game, "As Foretold", "Amonkhet Promos", "PAKH");
  }
}

module.exports = AsForetold;
