"use strict";
const Constants = require ("../../../Constants");
const DamnationBase = require("../setpMPR/Damnation");

class Damnation extends DamnationBase {
  constructor(game) {
    super(game, "Damnation", "Planar Chaos", "PLC");
  }
}

module.exports = Damnation;
