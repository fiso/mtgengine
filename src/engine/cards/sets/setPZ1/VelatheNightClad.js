"use strict";
const Constants = require ("../../../Constants");
const VelatheNightCladBase = require("../setC17/VelatheNightClad");

class VelatheNightClad extends VelatheNightCladBase {
  constructor (game) {
    super(game, "Vela the Night-Clad", "Legendary Cube", "PZ1");
  }
}

module.exports = VelatheNightClad;
