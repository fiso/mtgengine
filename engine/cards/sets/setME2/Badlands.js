"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BadlandsBase = require("../setCED/Badlands.js");

class Badlands extends BadlandsBase {
  constructor(game) {
    super(game, "Badlands", "Masters Edition II", "ME2");
  }
}

module.exports = Badlands;
