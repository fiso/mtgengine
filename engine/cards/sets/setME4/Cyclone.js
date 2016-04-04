"use strict";
const Constants = require ("../../../Constants");
const CycloneBase = require("../setARN/Cyclone");

class Cyclone extends CycloneBase {
  constructor(game) {
    super(game, "Cyclone", "Masters Edition IV", "ME4");
  }
}

module.exports = Cyclone;
