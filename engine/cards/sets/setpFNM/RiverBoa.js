"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiverBoaBase = require("../setBRB/RiverBoa.js");

class RiverBoa extends RiverBoaBase {
  constructor(game) {
    super(game, "River Boa", "Friday Night Magic", "pFNM");
  }
}

module.exports = RiverBoa;
