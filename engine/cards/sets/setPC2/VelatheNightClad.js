"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VelatheNightCladBase = require("../setCM1/VelatheNightClad.js");

class VelatheNightClad extends VelatheNightCladBase {
  constructor(game) {
    super(game, "Vela the Night-Clad", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = VelatheNightClad;
