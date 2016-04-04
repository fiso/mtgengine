"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarshalsAnthemBase = require("../setC14/MarshalsAnthem.js");

class MarshalsAnthem extends MarshalsAnthemBase {
  constructor(game) {
    super(game, "Marshal's Anthem", "Worldwake", "WWK");
  }
}

module.exports = MarshalsAnthem;
