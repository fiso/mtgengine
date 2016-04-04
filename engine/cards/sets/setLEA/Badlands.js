"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BadlandsBase = require("../setCED/Badlands.js");

class Badlands extends BadlandsBase {
  constructor(game) {
    super(game, "Badlands", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Badlands;
