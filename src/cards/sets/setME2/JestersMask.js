"use strict";
const Constants = require ("../../../Constants");
const JestersMaskBase = require("../setICE/JestersMask");

class JestersMask extends JestersMaskBase {
  constructor(game) {
    super(game, "Jester's Mask", "Masters Edition II", "ME2");
  }
}

module.exports = JestersMask;
