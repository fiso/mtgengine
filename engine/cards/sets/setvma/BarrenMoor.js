"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BarrenMoorBase = require("../setARC/BarrenMoor.js");

class BarrenMoor extends BarrenMoorBase {
  constructor(game) {
    super(game, "Barren Moor", "Vintage Masters", "VMA");
  }
}

module.exports = BarrenMoor;
