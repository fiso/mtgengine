"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MagusoftheCoffersBase = require("../setC14/MagusoftheCoffers.js");

class MagusoftheCoffers extends MagusoftheCoffersBase {
  constructor(game) {
    super(game, "Magus of the Coffers", "Planar Chaos", "PLC");
  }
}

module.exports = MagusoftheCoffers;
