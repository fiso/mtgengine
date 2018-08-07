"use strict";
const Constants = require ("../../../Constants");
const NarwhalBase = require("../setME2/Narwhal");

class Narwhal extends NarwhalBase {
  constructor (game) {
    super(game, "Narwhal", "Homelands", "HML");
  }
}

module.exports = Narwhal;
