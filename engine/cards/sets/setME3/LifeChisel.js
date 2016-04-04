"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LifeChiselBase = require("../setLEG/LifeChisel.js");

class LifeChisel extends LifeChiselBase {
  constructor(game) {
    super(game, "Life Chisel", "Masters Edition III", "ME3");
  }
}

module.exports = LifeChisel;
