"use strict";
const Constants = require ("../../../Constants");
const CanopyVistaBase = require("../setBFZ/CanopyVista");

class CanopyVista extends CanopyVistaBase {
  constructor (game) {
    super(game, "Canopy Vista", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = CanopyVista;
