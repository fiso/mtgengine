"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DisenchantBase = require("../setATH/Disenchant.js");

class Disenchant extends DisenchantBase {
  constructor(game) {
    super(game, "Disenchant", "Friday Night Magic", "pFNM");
  }
}

module.exports = Disenchant;
