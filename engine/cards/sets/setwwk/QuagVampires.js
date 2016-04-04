"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const QuagVampiresBase = require("../setCNS/QuagVampires.js");

class QuagVampires extends QuagVampiresBase {
  constructor(game) {
    super(game, "Quag Vampires", "Worldwake", "WWK");
  }
}

module.exports = QuagVampires;
