"use strict";
const Constants = require ("../../../Constants");
const VelatheNightCladBase = require("../setCM1/VelatheNightClad");

class VelatheNightClad extends VelatheNightCladBase {
  constructor(game) {
    super(game, "Vela the Night-Clad", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = VelatheNightClad;
