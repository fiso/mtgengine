"use strict";
const Constants = require ("../../../Constants");
const CycloneBase = require("../setARN/Cyclone");

class Cyclone extends CycloneBase {
  constructor(game) {
    super(game, "Cyclone", "Chronicles", "CHR");
  }
}

module.exports = Cyclone;
