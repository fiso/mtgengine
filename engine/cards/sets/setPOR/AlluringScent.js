"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AlluringScentBase = require("../setME4/AlluringScent.js");

class AlluringScent extends AlluringScentBase {
  constructor(game) {
    super(game, "Alluring Scent", "Portal", "POR");
  }
}

module.exports = AlluringScent;
