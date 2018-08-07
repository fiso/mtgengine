"use strict";
const Constants = require ("../../../Constants");
const CanopyVistaBase = require("../setBFZ/CanopyVista");

class CanopyVista extends CanopyVistaBase {
  constructor (game) {
    super(game, "Canopy Vista", "BFZ Standard Series", "PSS1");
  }
}

module.exports = CanopyVista;
