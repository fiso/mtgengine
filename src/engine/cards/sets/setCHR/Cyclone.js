"use strict";
const Constants = require ("../../../Constants");
const CycloneBase = require("../setME4/Cyclone");

class Cyclone extends CycloneBase {
  constructor (game) {
    super(game, "Cyclone", "Chronicles", "CHR");
  }
}

module.exports = Cyclone;
