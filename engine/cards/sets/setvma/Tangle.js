"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TangleBase = require("../setINV/Tangle.js");

class Tangle extends TangleBase {
  constructor(game) {
    super(game, "Tangle", "Vintage Masters", "VMA");
  }
}

module.exports = Tangle;
