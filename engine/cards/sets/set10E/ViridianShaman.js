"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ViridianShamanBase = require("../setC15/ViridianShaman.js");

class ViridianShaman extends ViridianShamanBase {
  constructor(game) {
    super(game, "Viridian Shaman", "Tenth Edition", "10E");
  }
}

module.exports = ViridianShaman;
