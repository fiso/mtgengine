"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GiantMantisBase = require("../setBFZ/GiantMantis.js");

class GiantMantis extends GiantMantisBase {
  constructor(game) {
    super(game, "Giant Mantis", "Mirage", "MIR");
  }
}

module.exports = GiantMantis;
