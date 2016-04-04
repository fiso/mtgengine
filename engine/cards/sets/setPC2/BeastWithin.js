"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeastWithinBase = require("../setDDL/BeastWithin.js");

class BeastWithin extends BeastWithinBase {
  constructor(game) {
    super(game, "Beast Within", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BeastWithin;
