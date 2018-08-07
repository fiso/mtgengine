"use strict";
const Constants = require ("../../../Constants");
const JestersMaskBase = require("../setME2/JestersMask");

class JestersMask extends JestersMaskBase {
  constructor (game) {
    super(game, "Jester's Mask", "Ice Age", "ICE");
  }
}

module.exports = JestersMask;
