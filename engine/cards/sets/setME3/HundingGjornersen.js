"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HundingGjornersenBase = require("../setLEG/HundingGjornersen.js");

class HundingGjornersen extends HundingGjornersenBase {
  constructor(game) {
    super(game, "Hunding Gjornersen", "Masters Edition III", "ME3");
  }
}

module.exports = HundingGjornersen;
