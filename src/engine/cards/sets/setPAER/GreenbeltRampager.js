"use strict";
const Constants = require ("../../../Constants");
const GreenbeltRampagerBase = require("../setAER/GreenbeltRampager");

class GreenbeltRampager extends GreenbeltRampagerBase {
  constructor (game) {
    super(game, "Greenbelt Rampager", "Aether Revolt Promos", "PAER");
  }
}

module.exports = GreenbeltRampager;
