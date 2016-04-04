"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AbsorbVisBase = require("../setCON/AbsorbVis.js");

class AbsorbVis extends AbsorbVisBase {
  constructor(game) {
    super(game, "Absorb Vis", "Modern Masters", "MMA");
  }
}

module.exports = AbsorbVis;
