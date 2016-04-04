"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CircularLogicBase = require("../setpFNM/CircularLogic.js");

class CircularLogic extends CircularLogicBase {
  constructor(game) {
    super(game, "Circular Logic", "Vintage Masters", "VMA");
  }
}

module.exports = CircularLogic;
