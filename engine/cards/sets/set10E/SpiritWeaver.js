"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SpiritWeaverBase = require("../setINV/SpiritWeaver.js");

class SpiritWeaver extends SpiritWeaverBase {
  constructor(game) {
    super(game, "Spirit Weaver", "Tenth Edition", "10E");
  }
}

module.exports = SpiritWeaver;
