"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeastWithinBase = require("../setDDL/BeastWithin.js");

class BeastWithin extends BeastWithinBase {
  constructor(game) {
    super(game, "Beast Within", "New Phyrexia", "NPH");
  }
}

module.exports = BeastWithin;
