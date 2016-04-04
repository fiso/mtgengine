"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SedgeTrollBase = require("../setCED/SedgeTroll.js");

class SedgeTroll extends SedgeTrollBase {
  constructor(game) {
    super(game, "Sedge Troll", "Unlimited Edition", "2ED");
  }
}

module.exports = SedgeTroll;
