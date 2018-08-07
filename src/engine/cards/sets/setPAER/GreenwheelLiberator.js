"use strict";
const Constants = require ("../../../Constants");
const GreenwheelLiberatorBase = require("../setAER/GreenwheelLiberator");

class GreenwheelLiberator extends GreenwheelLiberatorBase {
  constructor (game) {
    super(game, "Greenwheel Liberator", "Aether Revolt Promos", "PAER");
  }
}

module.exports = GreenwheelLiberator;
