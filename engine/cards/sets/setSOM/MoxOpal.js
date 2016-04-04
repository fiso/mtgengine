"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoxOpalBase = require("../setMM2/MoxOpal.js");

class MoxOpal extends MoxOpalBase {
  constructor(game) {
    super(game, "Mox Opal", "Scars of Mirrodin", "SOM");
  }
}

module.exports = MoxOpal;
