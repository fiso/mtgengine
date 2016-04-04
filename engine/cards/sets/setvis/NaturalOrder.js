"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NaturalOrderBase = require("../setpJGP/NaturalOrder.js");

class NaturalOrder extends NaturalOrderBase {
  constructor(game) {
    super(game, "Natural Order", "Visions", "VIS");
  }
}

module.exports = NaturalOrder;
