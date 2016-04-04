"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NumottheDevastatorBase = require("../setCMD/NumottheDevastator.js");

class NumottheDevastator extends NumottheDevastatorBase {
  constructor(game) {
    super(game, "Numot, the Devastator", "Planar Chaos", "PLC");
  }
}

module.exports = NumottheDevastator;
