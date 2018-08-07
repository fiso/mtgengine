"use strict";
const Constants = require ("../../../Constants");
const AbsorbVisBase = require("../setCN2/AbsorbVis");

class AbsorbVis extends AbsorbVisBase {
  constructor (game) {
    super(game, "Absorb Vis", "Modern Masters", "MMA");
  }
}

module.exports = AbsorbVis;
